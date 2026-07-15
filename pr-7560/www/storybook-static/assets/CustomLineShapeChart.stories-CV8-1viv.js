import{R as t}from"./iframe-ClcrwGuW.js";import{i as p}from"./isWellBehavedNumber-DdPJLAK-.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BymBWjuL.js";import{R as T}from"./zIndexSlice-BIGnlmU8.js";import{C as M}from"./CartesianGrid-dXDFDE-n.js";import{X as $}from"./XAxis-DBark8Vy.js";import{Y as I}from"./YAxis-XJItrttK.js";import{L as O}from"./Legend-BS7RA_N3.js";import{T as W}from"./Tooltip-CHjDpm_C.js";import{L as C}from"./Line-A183MaDD.js";import{C as X}from"./Curve-CrblFnpJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-9pIX-KZX.js";import"./RechartsWrapper-BesFJ4ht.js";import"./index-B0NRpt-4.js";import"./index-DNzarm0L.js";import"./index-2ZX0-Izg.js";import"./index-CDmIxHtk.js";import"./throttle-CCS8xgZt.js";import"./renderedTicksSlice-rMv3D_T6.js";import"./axisSelectors-BOLsAE8g.js";import"./d3-scale-CMtXPpnj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DuIwxUsc.js";import"./chartDataContext-STSGah94.js";import"./CategoricalChart-C5ZgEjVK.js";import"./CartesianAxis-ByEdCDio.js";import"./Layer-3ZpdhJcS.js";import"./Text-BoORctzg.js";import"./DOMUtils-Bjh7wfeW.js";import"./Label-Dq1bNHIu.js";import"./ZIndexLayer-ktmCEwYK.js";import"./types-BTRTN-qV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-D815RcxC.js";import"./symbol-9zs_gWxT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-0hht_3Y4.js";import"./uniqBy-BWkjWHs1.js";import"./iteratee-D67nRlPy.js";import"./useAnimationId-Dr2V8ESg.js";import"./Cross-2z9sFD4c.js";import"./Rectangle-BnksOpBX.js";import"./util-Dxo8gN5i.js";import"./Sector-DEtGgNIy.js";import"./AnimatedItems-LJ4rT4-Q.js";import"./ActivePoints-DpbrBFbr.js";import"./Dot-BJH-Cd7h.js";import"./RegisterGraphicalItemId-D8phwbUX.js";import"./ErrorBarContext-BQj1MtW_.js";import"./GraphicalItemClipPath-UUgKir8H.js";import"./SetGraphicalItem-CKgMzTJ0.js";import"./getRadiusAndStrokeWidthFromDot-DBwea6ik.js";import"./ActiveShapeUtils-kn3TCk0Z.js";import"./step-Kzlz86Dk.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Nt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Nt as __namedExportsOrder,Bt as default};
