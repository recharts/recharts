import{e as t}from"./iframe-Bg9Z345n.js";import{R as D,i as s}from"./arrayEqualityCheck-CR8W5Kti.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Ctywj7SK.js";import{C as T}from"./CartesianGrid-Dn3x157K.js";import{X as M}from"./XAxis-DhRZk_Mh.js";import{Y as $}from"./YAxis-BhiIVd-U.js";import{L as O}from"./Legend-CSWTPESq.js";import{T as W}from"./Tooltip-BJk6GwsQ.js";import{L as C}from"./Line-gMUWcZmO.js";import{R as X}from"./RechartsHookInspector-DZje97zi.js";import{C as Y}from"./Curve-CW_ra8M9.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-1kFCboKo.js";import"./immer-BVutyhQF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8iTtnHJd.js";import"./index-DmHLw308.js";import"./hooks-BQaOS62t.js";import"./axisSelectors-26bP4L-h.js";import"./d3-scale-Dqhx0vW7.js";import"./zIndexSlice-peT_55F_.js";import"./renderedTicksSlice-By7COYk0.js";import"./CartesianChart-LuczCI7G.js";import"./chartDataContext-UodH6WPb.js";import"./CategoricalChart-DxtCX4Pl.js";import"./CartesianAxis-2wCCgYqS.js";import"./Layer-BdGV6vMM.js";import"./Text-DxC6lCk_.js";import"./DOMUtils-DkCGUMsy.js";import"./Label-CELZqSQs.js";import"./ZIndexLayer-DPL5778T.js";import"./types-B4W4ehrV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-tflhkrqf.js";import"./symbol-Bo8u8Uca.js";import"./step-DoGAfiJ-.js";import"./useElementOffset-DW5Fjzna.js";import"./uniqBy-vl8O6EJ5.js";import"./iteratee-CDnMDBPk.js";import"./useAnimationId-DlZyApEc.js";import"./Cross-mvX4C_43.js";import"./Rectangle-EnxeHGuf.js";import"./Sector-Cn3PZ_qJ.js";import"./ReactUtils-BmxePv9D.js";import"./ActivePoints-BR-WzUNj.js";import"./Dot-Bp1BlqgP.js";import"./RegisterGraphicalItemId-CQ218WRb.js";import"./ErrorBarContext-Cj6LG5IF.js";import"./GraphicalItemClipPath-DwPF2ph8.js";import"./SetGraphicalItem-H_2GMEv6.js";import"./getRadiusAndStrokeWidthFromDot-DAE3CzX3.js";import"./ActiveShapeUtils-te7DRz-E.js";import"./isPlainObject-Bo6U1upe.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DbTvkq0k.js";import"./index-CjwjTBDZ.js";import"./ChartSizeDimensions-Uo90Geyy.js";import"./OffsetShower-C3m1IvZt.js";import"./PlotAreaShower-CfpcGPOz.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
