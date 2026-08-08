import{R as t}from"./iframe-BivO5BoJ.js";import{a as s}from"./isWellBehavedNumber-BP5BBjcl.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CT2CeP2f.js";import{R as T}from"./zIndexSlice-Bjz_KcZJ.js";import{C as M}from"./CartesianGrid-Nd8vuP0W.js";import{X as $}from"./XAxis-CJk4qOf_.js";import{Y as I}from"./YAxis-CMfIE2am.js";import{L as O}from"./Legend-B82JAurw.js";import{T as W}from"./Tooltip-T6Mly44j.js";import{L as C}from"./Line-DOQ0pUTN.js";import{C as X}from"./Curve-DmB3zN28.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B41TlN8V.js";import"./RechartsWrapper-DFOf-gVb.js";import"./index-DdI5aF1Z.js";import"./index-eGB7E-8r.js";import"./index-03GkEewG.js";import"./index-B0o2St2z.js";import"./throttle-BplF9VH1.js";import"./axisSelectors-DhnOFegq.js";import"./d3-scale-oUOyK3d-.js";import"./renderedTicksSlice-CI5d0VIf.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-By-DJA1x.js";import"./chartDataContext-bLv_3jvW.js";import"./CategoricalChart-piOEuQ3H.js";import"./CartesianAxis-yaWpeoNa.js";import"./Layer-CQraiAmP.js";import"./Text-B8O_8yPP.js";import"./DOMUtils-CA0Xf545.js";import"./Label-C7YhLpFH.js";import"./ZIndexLayer-TaYOeXN7.js";import"./types-Ci90ji2E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CezfAeyp.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Druc529R.js";import"./symbol-CL0lcOqi.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B725Ga0q.js";import"./uniqBy-QhayOO9-.js";import"./iteratee-Be5jHE0S.js";import"./useAnimationId-C4RNTUIo.js";import"./Cross-FKmnnO-n.js";import"./Rectangle-B0xUjER0.js";import"./util-Dxo8gN5i.js";import"./Sector-CjNobHQ5.js";import"./AnimatedItems-Daz5NR7w.js";import"./ActivePoints-_kZDvhaZ.js";import"./Dot-BA4sFX2k.js";import"./RegisterGraphicalItemId-CmSKkMyt.js";import"./ErrorBarContext-ChpCgx9m.js";import"./GraphicalItemClipPath-xHJ3Vi6r.js";import"./SetGraphicalItem-D5hw8CGc.js";import"./graphicalItemIdentity-PtVRHa7z.js";import"./ActiveShapeUtils-BWMWU3gW.js";import"./step-D7AgkVHN.js";const qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const zt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,zt as __namedExportsOrder,qt as default};
