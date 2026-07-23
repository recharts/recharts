import{R as t}from"./iframe-DRSW8ue2.js";import{i as p}from"./isWellBehavedNumber-DAnude9s.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CRj1BXKo.js";import{R as T}from"./zIndexSlice-Bu-rrRtT.js";import{C as M}from"./CartesianGrid-DmzPENvO.js";import{X as $}from"./XAxis-CC1uze90.js";import{Y as I}from"./YAxis-B6_VA_0t.js";import{L as O}from"./Legend-CEXSBB3s.js";import{T as W}from"./Tooltip-D7J-8-px.js";import{L as C}from"./Line-BDixv5uA.js";import{C as X}from"./Curve-BBQJYMka.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-raTiTqbb.js";import"./RechartsWrapper-DT9xTVvF.js";import"./index-CyOXcHUd.js";import"./index-iUHBfWdS.js";import"./index-90eqwCh0.js";import"./index-p0Ur2FF4.js";import"./throttle-CUiRuHKg.js";import"./renderedTicksSlice-Dq99djjA.js";import"./axisSelectors-D9B32UgG.js";import"./d3-scale-C6_vDDuq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CHa2q2rq.js";import"./chartDataContext-BFVcvsqe.js";import"./CategoricalChart-CyaAwA7K.js";import"./CartesianAxis-CAXmUWDV.js";import"./Layer-BXqs-IsN.js";import"./Text-DjqRVUg-.js";import"./DOMUtils-CyGXHzmH.js";import"./Label-DWIM-PiW.js";import"./ZIndexLayer-CrpBbv8w.js";import"./types-CaXHGphp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-BqX3jNiq.js";import"./symbol-DgBEw3iz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BlZZNFfN.js";import"./uniqBy-CesywXT2.js";import"./iteratee-badt6V5j.js";import"./useAnimationId-Dnplssp6.js";import"./Cross-Sl84kG4H.js";import"./Rectangle-EoVmD57K.js";import"./util-Dxo8gN5i.js";import"./Sector-Dj-zA7B-.js";import"./AnimatedItems-Dm8lwSRg.js";import"./ActivePoints-Bj6N22Y9.js";import"./Dot-BBNcCK9J.js";import"./RegisterGraphicalItemId-D6Xem68n.js";import"./ErrorBarContext-CZiW4Ksz.js";import"./GraphicalItemClipPath-D8tm2vL2.js";import"./SetGraphicalItem-CM2WyRpW.js";import"./getRadiusAndStrokeWidthFromDot-BL9YvDb6.js";import"./ActiveShapeUtils-CyqwB66-.js";import"./step-D-9g_k4w.js";const Nt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,qt as __namedExportsOrder,Nt as default};
