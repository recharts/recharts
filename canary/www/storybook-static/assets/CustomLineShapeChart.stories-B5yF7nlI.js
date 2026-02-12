import{e as t}from"./iframe-C_JnpPxC.js";import{R as D,n as p}from"./arrayEqualityCheck-sT-8H7T8.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DwQCMcTM.js";import{C as K}from"./CartesianGrid-DA_b3ABB.js";import{X as T}from"./XAxis-BpjCkomw.js";import{Y as M}from"./YAxis-DzTe-R4y.js";import{L as $}from"./Legend-C3gdFYUm.js";import{T as O}from"./Tooltip-nNBYy1_E.js";import{L as C}from"./Line-CYhOsuSD.js";import{R as W}from"./RechartsHookInspector-C-nhVX4u.js";import{C as X}from"./Curve-qS1_4eph.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DMs63srN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Be1xWQVx.js";import"./hooks-CilDgeMs.js";import"./axisSelectors-BYc0e3fJ.js";import"./zIndexSlice-DoGitowx.js";import"./CartesianChart-DVAMnmgu.js";import"./chartDataContext-DiOyHIUd.js";import"./CategoricalChart-CBvXep6K.js";import"./CartesianAxis-VwfEIEjI.js";import"./Layer-WpsYuzZU.js";import"./Text-BdVB7IGp.js";import"./DOMUtils-CDXVQVNr.js";import"./Label-CxS5BAR7.js";import"./ZIndexLayer-B-ShVZV-.js";import"./types-BnNymUFW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-fhVjgxn_.js";import"./useElementOffset-mphMDU7E.js";import"./iteratee-DOHkUNXJ.js";import"./Cross-KZHzRurl.js";import"./Rectangle-CnZDt0bN.js";import"./useAnimationId-BOqolhoS.js";import"./Sector-H2-tBEz5.js";import"./ReactUtils-D29wERIN.js";import"./ActivePoints-JrhNNaZp.js";import"./Dot-DS8ISMrc.js";import"./RegisterGraphicalItemId-DO88ATNs.js";import"./ErrorBarContext-BfsPTak7.js";import"./GraphicalItemClipPath-CZbJihCA.js";import"./SetGraphicalItem-oGTsK5LX.js";import"./getRadiusAndStrokeWidthFromDot-DoVJFvmy.js";import"./ActiveShapeUtils-Ft9Dseux.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-D9fBkVlH.js";import"./index-BwFDqC8u.js";import"./ChartSizeDimensions-b9L3p-kX.js";import"./OffsetShower-D08e_oKq.js";import"./PlotAreaShower-g5XUniHF.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
