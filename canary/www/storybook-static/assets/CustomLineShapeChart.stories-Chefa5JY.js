import{e as t}from"./iframe-u6iaaRfQ.js";import{R as D,i as s}from"./arrayEqualityCheck-CLYylJu6.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Bl6ZNbva.js";import{C as T}from"./CartesianGrid-BY6Zx_xc.js";import{X as M}from"./XAxis-CafeDi3k.js";import{Y as $}from"./YAxis-DOArs6LY.js";import{L as O}from"./Legend-CQkR-ZeO.js";import{T as W}from"./Tooltip-CJ-qgz5i.js";import{L as C}from"./Line-BT8py2Um.js";import{R as X}from"./RechartsHookInspector-ChFSzWj0.js";import{C as Y}from"./Curve-5QbieyFV.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-IMCpx0Yt.js";import"./immer-2VVJTBUN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxKNS5Rk.js";import"./index-CIiFpIIw.js";import"./hooks-Dssc-Fg7.js";import"./axisSelectors-krUy4F6I.js";import"./d3-scale-Bj-ttDNW.js";import"./zIndexSlice-DWVvwkZr.js";import"./renderedTicksSlice-B-DvccZo.js";import"./CartesianChart-Dljgkd1w.js";import"./chartDataContext-CfRwcYbq.js";import"./CategoricalChart-CFZJD47L.js";import"./CartesianAxis-D9B34M5E.js";import"./Layer-CT2CAOks.js";import"./Text-CgS9yB44.js";import"./DOMUtils-Nlbt7DfZ.js";import"./Label-DK4_THpm.js";import"./ZIndexLayer-D67zVttg.js";import"./types-BdeQdTqa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Bxoc8kEL.js";import"./symbol-BgXEUeDH.js";import"./step-0mVlQoKY.js";import"./useElementOffset-DUmZLxwu.js";import"./uniqBy-CfdH-2E7.js";import"./iteratee-Dv-ztwy4.js";import"./useAnimationId-BD3P1pqn.js";import"./Cross-DqQk76bW.js";import"./Rectangle-DqG21RYU.js";import"./Sector-Cd7r1-lt.js";import"./ReactUtils-BAv5fhiw.js";import"./ActivePoints-BaaXz2oX.js";import"./Dot-CTvFv7nE.js";import"./RegisterGraphicalItemId-C8o_81FM.js";import"./ErrorBarContext-qXy6_5PW.js";import"./GraphicalItemClipPath-PPuT3qYL.js";import"./SetGraphicalItem-CnqUUVpy.js";import"./getRadiusAndStrokeWidthFromDot-PqQ1H61_.js";import"./ActiveShapeUtils-DdZUdvs2.js";import"./isPlainObject-B8BtVZgq.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CNfti2nG.js";import"./index-BOENtfhc.js";import"./ChartSizeDimensions-CsL5LAMT.js";import"./OffsetShower-D3fuh2M8.js";import"./PlotAreaShower-FynNvHOc.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
