import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{E as r,Ht as i,M as a,pn as o,t as s,vt as c}from"./iframe-BqVvK_R4.js";function l(e,t,n,r){return[{name:`Email`,value:e,fill:`#8884d8`},{name:`Social Media`,value:t,fill:`#a683ed`},{name:`Phone`,value:n,fill:`#e18dd1`},{name:`Web chat`,value:r,fill:`#82ca9d`}]}function u(e,t,n){let{relativeX:r,relativeY:i}=a(n),o=r-e,s=i-t,c=-Math.atan2(s,o)*(180/Math.PI);return c<0?c+360:c}function d({cx:e,cy:t,angle:n,radius:r}){let a=e+r*Math.cos(n*Math.PI/180),s=t-r*Math.sin(n*Math.PI/180);return f.createElement(i,{zIndex:o.activeDot},f.createElement(`circle`,{style:{cursor:`grab`},cx:a,cy:s,r:10,fill:`red`}))}var f,p,m,h;e((()=>{f=t(n()),s(),p={component:c},m={render:()=>{let[e,t]=(0,f.useState)(null),[n,i]=(0,f.useState)(90),[a,o]=(0,f.useState)(90),s=l(n,a,90,90);return f.createElement(r,{width:500,height:500,margin:{top:0,right:0,left:0,bottom:0},onMouseDown:()=>{t(`email`)},onMouseUp:()=>{t(null)},onMouseMove:(t,r)=>{if(e){let e=u(250,250,r),t=e-n;i(e),o(a-t)}}},f.createElement(c,{dataKey:`value`,data:s,outerRadius:200,label:!0,isAnimationActive:!1}),f.createElement(d,{angle:n,radius:200,cx:250,cy:250}))}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isDragging, setIsDragging] = useState<string | null>(null);
    const [email, setEmail] = useState(90);
    const [socialMedia, setSocialMedia] = useState(90);
    const data = createData(email, socialMedia, 90, 90);
    const cx = 250;
    const cy = 250;
    return <PieChart width={500} height={500} margin={{
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }} onMouseDown={() => {
      setIsDragging('email');
    }} onMouseUp={() => {
      setIsDragging(null);
    }} onMouseMove={(_data, e) => {
      if (isDragging) {
        const newAngleInDegrees = computeAngle(cx, cy, e);
        const delta = newAngleInDegrees - email;
        setEmail(newAngleInDegrees);
        setSocialMedia(socialMedia - delta);
      }
    }}>
        <Pie dataKey="value" data={data} outerRadius={200} label isAnimationActive={false} />
        <DraggablePoint angle={email} radius={200} cx={cx} cy={cy} />
      </PieChart>;
  }
}`,...m.parameters?.docs?.source}}},h=[`DraggablePie`]}))();export{m as DraggablePie,h as __namedExportsOrder,p as default};