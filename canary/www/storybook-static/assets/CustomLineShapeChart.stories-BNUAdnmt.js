import{e as t}from"./iframe-DxZX8v3W.js";import{R as D,n as p}from"./arrayEqualityCheck-CHFkqTV_.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-Btq6VZCY.js";import{C as K}from"./CartesianGrid-DQNeuEVT.js";import{X as T}from"./XAxis-DzPSb7qL.js";import{Y as M}from"./YAxis-CpMOxs2p.js";import{L as $}from"./Legend-BW6GuNFW.js";import{T as O}from"./Tooltip-AYYQXPAP.js";import{L as C}from"./Line-kMI0-8qe.js";import{R as W}from"./RechartsHookInspector-EozXGI-d.js";import{C as X}from"./Curve-amoMOh-y.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DhuxpMgF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMTy2N8_.js";import"./hooks-B7xKXdiJ.js";import"./axisSelectors-CsqEoZpJ.js";import"./zIndexSlice-DbH822fK.js";import"./CartesianChart-BGtowRh8.js";import"./chartDataContext-kn-jHXwi.js";import"./CategoricalChart-CLJuTuVW.js";import"./CartesianAxis-DPUMtDOy.js";import"./Layer-BPZWkKY5.js";import"./Text-BjDK3asE.js";import"./DOMUtils-BxXkT_Dg.js";import"./Label-DcVTU5jd.js";import"./ZIndexLayer-u2cA8wLh.js";import"./types-DXQoRjfG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-ByPpWVp2.js";import"./useElementOffset-BYdkRgKD.js";import"./iteratee-Bw9xrDoj.js";import"./Cross-BYg9PL7z.js";import"./Rectangle-ZKdZP-LA.js";import"./useAnimationId-DTZHXicx.js";import"./Sector-C4RYsjmR.js";import"./ReactUtils-BR0ZodR6.js";import"./ActivePoints-ChW3PNAb.js";import"./Dot-6gTSKkj_.js";import"./RegisterGraphicalItemId-DtMUd9c3.js";import"./ErrorBarContext-BbaI3C-C.js";import"./GraphicalItemClipPath-DHNbR-WC.js";import"./SetGraphicalItem-BXOgfpPM.js";import"./getRadiusAndStrokeWidthFromDot-9yl6HY0F.js";import"./ActiveShapeUtils-umUGRO3f.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-B8lDUleJ.js";import"./index-59kLrafc.js";import"./ChartSizeDimensions-DNmKalNs.js";import"./OffsetShower-Bf42ilrd.js";import"./PlotAreaShower-CjZ5fG5L.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,jt as __namedExportsOrder,_t as default};
