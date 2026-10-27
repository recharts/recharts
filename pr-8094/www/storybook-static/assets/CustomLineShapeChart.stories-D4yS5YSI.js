import{R as t}from"./iframe-DsuaRm2b.js";import{R as D,m as p}from"./zIndexSlice-BHCK5tg8.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-B00fYb-X.js";import{C as M}from"./CartesianGrid-C4KbAzbG.js";import{X as $}from"./XAxis-DLqBMq0Q.js";import{Y as I}from"./YAxis-dn2GRGzH.js";import{L as O}from"./Legend-CfNgZIbH.js";import{T as W}from"./Tooltip-e9xtskO3.js";import{L as f}from"./Line-DtkCR5A2.js";import{C as X}from"./Curve-B54D09ht.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-tBmiBd0v.js";import"./throttle-CuCThFR3.js";import"./index-BjBwgNd2.js";import"./index-DLanYFve.js";import"./RechartsWrapper-B7rLRibb.js";import"./axisSelectors-CXh7ZK0v.js";import"./polarAxisSelectors-ZY9QidmG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D1FvEoQ3.js";import"./index-BqhjsQ14.js";import"./index-vSo2F5h4.js";import"./renderedTicksSlice-W2QLd4az.js";import"./index-C0CHU-c7.js";import"./CartesianChart-CFB_Qy3A.js";import"./ZIndexPortal-DYBSHocn.js";import"./CategoricalChart-Do18W6-M.js";import"./CartesianAxis-BCG5Rps_.js";import"./Layer-Bvg1MEF5.js";import"./Text-7KEzSR95.js";import"./pageBackground-gwgMpjOQ.js";import"./ZIndexLayer-FbasJJ13.js";import"./Label-Bg_SjTDz.js";import"./dataEntryStyles-CVVg9ITz.js";import"./types-BVjfEegt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Sb1I6V5y.js";import"./symbol-DiPBPxxC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BH16anoB.js";import"./uniqBy-BvBJ9JSl.js";import"./iteratee-D6J9B8SK.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-BDMFeBiK.js";import"./Cross-CHnu3AiU.js";import"./Rectangle-Dz3Crc0K.js";import"./util-Dxo8gN5i.js";import"./Sector-jsLncyAA.js";import"./LabelList-B1g8Cfod.js";import"./ActivePoints-BIHfIwHR.js";import"./Dot-CLio3VMY.js";import"./activeStyles-BEbyAFUN.js";import"./RegisterGraphicalItemId-ovNP-fPN.js";import"./ErrorBarContext-BJw3_1Vq.js";import"./SetGraphicalItem-DN4Prq4p.js";import"./getRadiusAndStrokeWidthFromDot-CuYo3i94.js";import"./ActiveShapeUtils-z3i_FVcp.js";import"./useEffectiveDataKey-DBOtZYxA.js";import"./step-CnnXSPZn.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
