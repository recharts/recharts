import{R as t}from"./iframe-1ThqpvbR.js";import{a as s}from"./isWellBehavedNumber-B7CQu1xd.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-N7VRS76I.js";import{R as T}from"./zIndexSlice-D1UhtHk3.js";import{C as M}from"./CartesianGrid-CYqWPTuQ.js";import{X as $}from"./XAxis-P8CW3MKP.js";import{Y as I}from"./YAxis-B1czIw6R.js";import{L as O}from"./Legend-DQdCByvU.js";import{T as W}from"./Tooltip-qvvWeQJ8.js";import{L as C}from"./Line-CQ64EOYy.js";import{C as X}from"./Curve-BFr4LVo1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DArzca5M.js";import"./RechartsWrapper-DcjLdZwM.js";import"./index-CfQ7Fwii.js";import"./index-CktiEatn.js";import"./index-DoTHKFlr.js";import"./index-QzMa9_Xi.js";import"./throttle-C73VAA69.js";import"./axisSelectors-1futPsBe.js";import"./d3-scale-nVhhBbRx.js";import"./renderedTicksSlice-0CGdVobN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-dewq0r_z.js";import"./chartDataContext-DvyAzMjZ.js";import"./CategoricalChart-XR-igInW.js";import"./CartesianAxis-LO87TYgw.js";import"./Layer-CO3sdEK1.js";import"./Text-MDWEE3g_.js";import"./DOMUtils-BsT2H8yg.js";import"./useId-Cq2DHNjh.js";import"./useBackwardsCompatibleTheme-CdEwSBID.js";import"./Label-Dga6ObK8.js";import"./ZIndexLayer-B6xphlKa.js";import"./types-BACZxUTO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CBU3aRDI.js";import"./symbol-III9KfYB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D_JS3Ekf.js";import"./uniqBy-BWHb0M0I.js";import"./iteratee-DkQJTWAO.js";import"./useAnimationId-xKJzFs5I.js";import"./Cross-ClqssIZ3.js";import"./Rectangle-DlLkmtYk.js";import"./util-Dxo8gN5i.js";import"./Sector-DQNnGbD_.js";import"./AnimatedItems-CScMa6hv.js";import"./ActivePoints-DT7ZsPv5.js";import"./Dot-fVKNfdE9.js";import"./RegisterGraphicalItemId-DZFAuRVF.js";import"./ErrorBarContext-DBffz6et.js";import"./GraphicalItemClipPath-Tv0C2Wnw.js";import"./SetGraphicalItem-DGTvGn78.js";import"./getRadiusAndStrokeWidthFromDot-Zg2QbZcY.js";import"./ActiveShapeUtils-BlimohsT.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-K_9BfkCY.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Jt as __namedExportsOrder,Ht as default};
