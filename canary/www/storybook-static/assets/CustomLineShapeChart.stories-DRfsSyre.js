import{e as t}from"./iframe-DPPC5LCd.js";import{R as D,n as p}from"./arrayEqualityCheck-Dvk8KT0D.js";import{L as v}from"./LineChartArgs-CwVdhtIV.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-D0oDf0o6.js";import{C as K}from"./CartesianGrid-CvB-qYbV.js";import{X as T}from"./XAxis-BG2Y_xwU.js";import{Y as M}from"./YAxis-BkVN0NTj.js";import{L as $}from"./Legend-CqiGLNsX.js";import{T as O}from"./Tooltip-Vhvc3XfR.js";import{L as C}from"./Line-Df8hhM8R.js";import{R as W}from"./RechartsHookInspector-Blp8PL-4.js";import{C as X}from"./Curve-Bys-PvMV.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-LOA1Y3L5.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-PEDxF674.js";import"./hooks-D7d6b41a.js";import"./axisSelectors-Y4qCzWsU.js";import"./zIndexSlice-Cyke5ZAj.js";import"./CartesianChart-CLhvhGCa.js";import"./chartDataContext-CBM88NXk.js";import"./CategoricalChart-DSnyIdqz.js";import"./CartesianAxis-CbeAAhwj.js";import"./Layer-l1Ju_rpU.js";import"./Text-CskNyNSq.js";import"./DOMUtils-BagiRLWz.js";import"./Label-CyOEca1T.js";import"./ZIndexLayer-BYs5zm3k.js";import"./types-BtZeuRvc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BVjVO6PI.js";import"./useElementOffset-C9FgqAtz.js";import"./iteratee-CxRByJ3f.js";import"./Cross-WWtM8EO7.js";import"./Rectangle-CdGsT6u6.js";import"./useAnimationId-BL1JszpL.js";import"./Sector-6q_tG2Nj.js";import"./ReactUtils-Dpo3QY29.js";import"./ActivePoints-bzJzis_r.js";import"./Dot-DGBsmHFR.js";import"./RegisterGraphicalItemId-CQrbIdXT.js";import"./ErrorBarContext-DOTmmgqX.js";import"./GraphicalItemClipPath-npaeuZne.js";import"./SetGraphicalItem-WBUrf2m8.js";import"./getRadiusAndStrokeWidthFromDot-r3LToZRM.js";import"./ActiveShapeUtils-CzCtjHUV.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BQbcDxOL.js";import"./index-vC2xkEJs.js";import"./ChartSizeDimensions-CMyfGdJP.js";import"./OffsetShower-B4IN2vD-.js";import"./PlotAreaShower-P_z3LqUB.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
