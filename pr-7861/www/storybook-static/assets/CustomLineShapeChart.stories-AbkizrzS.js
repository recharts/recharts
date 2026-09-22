import{R as t}from"./iframe-Bnv6kU7L.js";import{a as p}from"./isWellBehavedNumber-p1Jk9e7e.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CjHOueXW.js";import{R as T}from"./zIndexSlice-DX-eN-rE.js";import{C as M}from"./CartesianGrid-DrNrDduO.js";import{X as $}from"./XAxis-DBNaBuJh.js";import{Y as I}from"./YAxis-I5CDR0a7.js";import{L as O}from"./Legend-CbXtisxS.js";import{T as W}from"./Tooltip-BrDTZwiK.js";import{L as C}from"./Line-D6sVYIrE.js";import{C as X}from"./Curve-CLFCklxA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C4JEpLWp.js";import"./RechartsWrapper-BdebKPLC.js";import"./axisSelectors-W-alhPkw.js";import"./throttle-C8n004OX.js";import"./index-6B8fwti2.js";import"./index-B1qZkGH5.js";import"./d3-scale-BHEdKRtF.js";import"./index-DLmKm2EF.js";import"./index-C7lLa1F-.js";import"./renderedTicksSlice-B5DhdENT.js";import"./index-DoLpWonQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-4rkSr6qB.js";import"./chartDataContext-DQDeMryS.js";import"./CategoricalChart-a21GUZij.js";import"./CartesianAxis-BurxlCSY.js";import"./Layer-LCeVZLuX.js";import"./Text--hmlT8ZH.js";import"./DOMUtils-CsnJkvN_.js";import"./useId-6CZAolK0.js";import"./useBackwardsCompatibleTheme-C_K8id13.js";import"./Label-IhJ6Pxyk.js";import"./ZIndexLayer-BRXf-lni.js";import"./types-CI78TRyx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DjB5nWGx.js";import"./symbol-BzvQQSq9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BltoDhzS.js";import"./uniqBy-CZFb8bra.js";import"./iteratee-CP0Pza9x.js";import"./useAnimationId-DYSRVMST.js";import"./Cross-60F11PdV.js";import"./Rectangle-CCZI10F2.js";import"./util-Dxo8gN5i.js";import"./Sector-C6wVCyaa.js";import"./AnimatedItems-BMX-ziY5.js";import"./ActivePoints-DPnTwfCa.js";import"./Dot-CcU1d5Kn.js";import"./RegisterGraphicalItemId-DzNK_j43.js";import"./ErrorBarContext-B1AHLu2R.js";import"./GraphicalItemClipPath-H0CINiNQ.js";import"./SetGraphicalItem-Gy1IhQNd.js";import"./getRadiusAndStrokeWidthFromDot-CAEUp3rE.js";import"./ActiveShapeUtils-BfWUUsmh.js";import"./useGraphicalItemIdentity-CQh8XILo.js";import"./step-DsteWZ2Z.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
