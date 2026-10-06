export function createScene(T,H){
  const scene=new T.Scene();scene.background=new T.Color(0x02060d);scene.fog=new T.FogExp2(0x02060d,.008);H.stars(scene,2400,180);
  const camera=new T.PerspectiveCamera(48,1,.1,400);camera.position.set(0,2,25);
  const fleet=new T.Group();scene.add(fleet);const count=1800,dummy=new T.Object3D();
  const hull=new T.InstancedMesh(new T.CylinderGeometry(.09,.17,1.8,6),new T.MeshStandardMaterial({color:0x8397a6,metalness:.75,roughness:.32}),count);
  const wings=new T.InstancedMesh(new T.BoxGeometry(.8,.1,.4),new T.MeshStandardMaterial({color:0x405267,metalness:.8,roughness:.35}),count);
  const engines=new T.InstancedMesh(new T.CylinderGeometry(.07,.10,.16,8),new T.MeshBasicMaterial({color:new T.Color(2,3,5)}),count);
  for(let i=0;i<count;i++){const row=Math.floor(i/45),col=i%45;dummy.position.set((col-22)*2.4,-3+(row%4)*1.5,-row*3.6-8);dummy.rotation.set(Math.PI/2,0,.15);dummy.scale.setScalar(.65+row*.005);dummy.updateMatrix();hull.setMatrixAt(i,dummy.matrix);wings.setMatrixAt(i,dummy.matrix);dummy.position.z+=.64;dummy.updateMatrix();engines.setMatrixAt(i,dummy.matrix);}fleet.add(hull,wings,engines);fleet.rotation.z=-.12;
  const profile=[];for(let i=0;i<=80;i++){const u=i/80;const radius=2.35*Math.sqrt(u)*Math.pow(1-u,1.25);profile.push(new T.Vector2(radius,-2.1+u*5.0));}
  const envTarget=new T.WebGLCubeRenderTarget(256,{type:T.HalfFloatType,generateMipmaps:true,minFilter:T.LinearMipmapLinearFilter});const cube=new T.CubeCamera(.1,250,envTarget);scene.add(cube);
  const metal=new T.MeshPhysicalMaterial({color:0xd8e5ef,metalness:1,roughness:.045,clearcoat:1,clearcoatRoughness:.03,envMap:envTarget.texture,envMapIntensity:1.8});
  const drop=new T.Mesh(new T.LatheGeometry(profile,96),metal);drop.position.set(6,0,4);drop.rotation.z=.5;drop.rotation.x=.15;scene.add(drop);
  const key=new T.DirectionalLight(0xc1e4ff,5);key.position.set(-5,8,10);scene.add(key);const rim=new T.DirectionalLight(0x7faeff,4);rim.position.set(12,-2,-5);scene.add(rim);scene.add(new T.AmbientLight(0x416381,.6));
  const reflectedWorld=H.planet(16,0x43657e);reflectedWorld.position.set(5,-36,-50);scene.add(reflectedWorld);
  // Off-camera luminous geometry forms real reflection highlights in the cube map.
  const reflectionRig=new T.Group();const stripMaterial=new T.MeshBasicMaterial({color:new T.Color(2,2.6,3.2),side:T.DoubleSide});for(let i=0;i<3;i++){const strip=new T.Mesh(new T.PlaneGeometry(i===2?24:12,45),stripMaterial);strip.position.set(i===0?-20:22,5,i===2?35:8);strip.lookAt(drop.position);reflectionRig.add(strip);}const dome=new T.Mesh(new T.SphereGeometry(130,24,16),new T.MeshBasicMaterial({color:0x284055,side:T.BackSide}));reflectionRig.add(dome);scene.add(reflectionRig);
  let mobile=false;return{scene,camera,capture(renderer){drop.visible=false;reflectionRig.visible=true;cube.position.copy(drop.position);cube.update(renderer,scene);drop.visible=true;reflectionRig.visible=false;},resize(aspect){mobile=aspect<.85;camera.aspect=aspect;camera.fov=mobile?59:48;camera.updateProjectionMatrix();},update(t,p,pointer){drop.position.set(mobile?0:6,mobile?-3.5:.1+Math.sin(t*.3)*.18,4+p*1.4);drop.rotation.set(.1+Math.sin(t*.16)*.13,t*.11,-.48+Math.sin(t*.2)*.06);drop.scale.setScalar(mobile?1.18:1.48);fleet.position.set(0,-5,1.8*Math.sin(t/6));engines.material.color.setRGB(.6+Math.sin(t*2)*.1,1.3,2);camera.position.set(pointer.x*.65,2+pointer.y*.35,25-p*1.2);camera.lookAt(0,0,0);},dispose(){envTarget.dispose();}};
}
