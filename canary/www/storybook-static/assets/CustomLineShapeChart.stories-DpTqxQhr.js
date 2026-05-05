import{e as t}from"./iframe-DftoLjMQ.js";import{R as D,i as s}from"./arrayEqualityCheck-OUBI6cxl.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CJGt3KAQ.js";import{C as T}from"./CartesianGrid-AIv_Erh0.js";import{X as M}from"./XAxis-diXG-Ooh.js";import{Y as $}from"./YAxis-_evmKux2.js";import{L as O}from"./Legend-BWUyCpiN.js";import{T as W}from"./Tooltip-U8E2AMmP.js";import{L as C}from"./Line-BaarjASd.js";import{R as X}from"./RechartsHookInspector-BW_p22UR.js";import{C as Y}from"./Curve-5-yobk2P.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BarHlGRM.js";import"./immer-CQJBkabG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DHlVG8GT.js";import"./index-uEh81NxT.js";import"./hooks-CtUEKUIT.js";import"./axisSelectors-wXsEFnMj.js";import"./d3-scale-BsmYBoZY.js";import"./zIndexSlice--T96FzXv.js";import"./renderedTicksSlice-D9MmoYOr.js";import"./CartesianChart-Dc_3s4TO.js";import"./chartDataContext-IpRtB3jy.js";import"./CategoricalChart-DhhIk46Q.js";import"./CartesianAxis-D4w_zo3U.js";import"./Layer-Dsgs0O8o.js";import"./Text-BLuQUWft.js";import"./DOMUtils-DS-WaQM8.js";import"./Label-OGw7wMde.js";import"./ZIndexLayer--xl3uim8.js";import"./types-Bejjp4Hx.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-xJuY3fVT.js";import"./symbol--t7F40kw.js";import"./step-DzOVAhhf.js";import"./useElementOffset-D9nHdrIo.js";import"./uniqBy-CvQpRBMV.js";import"./iteratee-C5N7-gfq.js";import"./useAnimationId-HlRR6VOg.js";import"./Cross-B1GXGlDw.js";import"./Rectangle-CdclZ8ZW.js";import"./Sector-9UyeEGs-.js";import"./ReactUtils-D8J0Scd8.js";import"./ActivePoints-CvxxlQO1.js";import"./Dot-BPJX98FX.js";import"./RegisterGraphicalItemId-BsfM9YTI.js";import"./ErrorBarContext-BqvDCGa4.js";import"./GraphicalItemClipPath-CA0a5dPY.js";import"./SetGraphicalItem-CtgQyVhP.js";import"./getRadiusAndStrokeWidthFromDot-1sEj6j-N.js";import"./ActiveShapeUtils-KSU4yUqy.js";import"./isPlainObject-DhKwCKiu.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-Cfr8ELTn.js";import"./index-l8sRLK9z.js";import"./ChartSizeDimensions-BJ7Qv0Pi.js";import"./OffsetShower-DBZtide3.js";import"./PlotAreaShower-DKTeWqRs.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
