import{e as t}from"./iframe-C04w6IgM.js";import{R as D,n as p}from"./arrayEqualityCheck-CbUGNhnJ.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-zZG9H035.js";import{C as K}from"./CartesianGrid-NOO7UTOC.js";import{X as T}from"./XAxis-BLBsMt8p.js";import{Y as M}from"./YAxis-Bx_U4OHG.js";import{L as $}from"./Legend-DqPx5rxE.js";import{T as O}from"./Tooltip-BWRjG5Hn.js";import{L as C}from"./Line-CyTxFKog.js";import{R as W}from"./RechartsHookInspector-B7Jr2nYf.js";import{C as X}from"./Curve-BQk4xMcU.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-W7dKz5yL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CFnGMsu4.js";import"./hooks-Cld4lrxT.js";import"./axisSelectors-BYq9-SUS.js";import"./zIndexSlice-BbE5d2nx.js";import"./CartesianChart-enHf794Z.js";import"./chartDataContext-Cjixp2uN.js";import"./CategoricalChart-PYyhSed2.js";import"./CartesianAxis-02lidDov.js";import"./Layer-DCya1uir.js";import"./Text-BJaKJCkK.js";import"./DOMUtils-BGMw9OAN.js";import"./Label-B7VXzhwV.js";import"./ZIndexLayer-HIOEAvam.js";import"./types-D-OVIK3i.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DPND5ycq.js";import"./useElementOffset-C4FWKBVU.js";import"./iteratee-BQD-KV_O.js";import"./Cross-CiiSYwmq.js";import"./Rectangle-DXVXA4zS.js";import"./useAnimationId-DPZtvNGp.js";import"./Sector-Cbb0SBJZ.js";import"./ReactUtils-C2UklmlD.js";import"./ActivePoints-BaLEk5hj.js";import"./Dot-FCeRraIm.js";import"./RegisterGraphicalItemId-DHraWFR-.js";import"./ErrorBarContext-vRJZfYBF.js";import"./GraphicalItemClipPath-Do9yu51T.js";import"./SetGraphicalItem-vjtDhulh.js";import"./getRadiusAndStrokeWidthFromDot-DFtLqJEr.js";import"./ActiveShapeUtils-BwfeuSce.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-C_oXf8hs.js";import"./index-Demzea1L.js";import"./ChartSizeDimensions-BMKfYLeY.js";import"./OffsetShower-RZSmdjyo.js";import"./PlotAreaShower-BeZsrL7O.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
