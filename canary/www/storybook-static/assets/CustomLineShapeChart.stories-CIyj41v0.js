import{R as t}from"./iframe-Dli_FHsd.js";import{a as p}from"./isWellBehavedNumber-DwKce9OS.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BAT-_zrN.js";import{R as T}from"./zIndexSlice-BKyYlhak.js";import{C as M}from"./CartesianGrid-BzY3upoB.js";import{X as $}from"./XAxis-CgWc3L0L.js";import{Y as I}from"./YAxis-BgeWKEji.js";import{L as O}from"./Legend-Cyv1gINv.js";import{T as W}from"./Tooltip-qV_4VdeC.js";import{L as C}from"./Line-WVA6lS0G.js";import{C as X}from"./Curve-V2biDmKc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D8Bu4bN4.js";import"./resolveDefaultProps-KCoOvOQy.js";import"./RechartsWrapper-gcMhRjLK.js";import"./index-654UjlcV.js";import"./index-TBfimrOP.js";import"./index-B6ei3fzd.js";import"./index-eEp7ik7X.js";import"./immer-BDVTnirG.js";import"./renderedTicksSlice-Cr_zgIG9.js";import"./axisSelectors-BOuTa97x.js";import"./d3-scale-BaROhcEs.js";import"./string-B6fdYHAA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B0dTZgGZ.js";import"./chartDataContext-Dh-3jSeu.js";import"./CategoricalChart-YvrRZEH2.js";import"./CartesianAxis-CDtTSBJJ.js";import"./Layer-D_tWiSqM.js";import"./Text-mDBdIk3r.js";import"./DOMUtils-CD-Gvcib.js";import"./Label-BlCBYS7y.js";import"./ZIndexLayer-56CQrnNK.js";import"./types-CxkhEKh5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DsJLAOJ5.js";import"./symbol-6EDMfIW2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B5TeNF6O.js";import"./uniqBy-wl0EV1X7.js";import"./iteratee-C41o_cYR.js";import"./useAnimationId-CYxQwOrZ.js";import"./Cross-BQHAWZSw.js";import"./Rectangle-BgP4O_cb.js";import"./Sector-DM3nS8n2.js";import"./AnimatedItems-DgK_VlyJ.js";import"./ActivePoints-Dhrwjh9s.js";import"./Dot-C9Ldg7B9.js";import"./RegisterGraphicalItemId-rjfoubwa.js";import"./ErrorBarContext-DHC85wCi.js";import"./GraphicalItemClipPath-BJpRRLBw.js";import"./SetGraphicalItem-DN3sQjPD.js";import"./getRadiusAndStrokeWidthFromDot-BTi0vxmW.js";import"./ActiveShapeUtils-pciG5q6n.js";import"./step-DJ-Uc0dW.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
