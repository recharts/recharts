import{e as t}from"./iframe-CgO1MpLR.js";import{R as D,i as s}from"./arrayEqualityCheck-u-i53ess.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DIKB9dqm.js";import{C as K}from"./CartesianGrid-pjOIFEPw.js";import{X as T}from"./XAxis-2XcNPuPe.js";import{Y as M}from"./YAxis-DlCb0Sdu.js";import{L as $}from"./Legend-DbHoqBrs.js";import{T as O}from"./Tooltip-TOxj-Y96.js";import{L as C}from"./Line-BmBLmpVt.js";import{R as W}from"./RechartsHookInspector-CDDYORWo.js";import{C as X}from"./Curve-DQA1Id8x.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DhOBRlG4.js";import"./immer-CbOoSQee.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CDt2FmMO.js";import"./index-DXMTaf8u.js";import"./hooks-2os6LPs1.js";import"./axisSelectors-GgUYtUsd.js";import"./d3-scale-DrxfQAZk.js";import"./zIndexSlice-Bk7fG6-8.js";import"./renderedTicksSlice-BCt2n75F.js";import"./CartesianChart-9rc0WcRq.js";import"./chartDataContext-BsDrumof.js";import"./CategoricalChart-B51A2DYk.js";import"./CartesianAxis-BWRdw-B1.js";import"./Layer-BnKx9soM.js";import"./Text-BsiCf19y.js";import"./DOMUtils-ClzY_4R6.js";import"./Label-DuKpvZQ2.js";import"./ZIndexLayer-GawZf7gt.js";import"./types-CR8KEC21.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-gxmwBdwn.js";import"./symbol-BbAFTquJ.js";import"./step-Do923Rg0.js";import"./useElementOffset-DfZinX6A.js";import"./uniqBy-D_Tq5wIv.js";import"./iteratee-BApfnIwz.js";import"./useAnimationId-DCzIcKnG.js";import"./Cross-B8G7Ixjy.js";import"./Rectangle-By3Xy3Xn.js";import"./Sector-D7mFZfC7.js";import"./ReactUtils-aHtS1QKc.js";import"./ActivePoints-4Dquq-We.js";import"./Dot-i5e7mgOR.js";import"./RegisterGraphicalItemId-DbAYEj3z.js";import"./ErrorBarContext-CuzIsVL-.js";import"./GraphicalItemClipPath-Kfq1Q5v1.js";import"./SetGraphicalItem-BLM5KnkQ.js";import"./getRadiusAndStrokeWidthFromDot-DB6-Bj1Z.js";import"./ActiveShapeUtils-B380zvEd.js";import"./isPlainObject-BwngMX5y.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CIGdjkmu.js";import"./index-Co6Xoctr.js";import"./ChartSizeDimensions-BHD_hXk_.js";import"./OffsetShower-DcNg8xR5.js";import"./PlotAreaShower-Dqalehnj.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
