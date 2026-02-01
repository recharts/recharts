import{e as t}from"./iframe-S3w8vazP.js";import{R as D,n as p}from"./arrayEqualityCheck-CVVcuOqH.js";import{L as v}from"./LineChartArgs-CwVdhtIV.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-Dn5XRmIY.js";import{C as K}from"./CartesianGrid-DDXkKXYO.js";import{X as T}from"./XAxis-y9KwpsE4.js";import{Y as M}from"./YAxis-BLaSPofG.js";import{L as $}from"./Legend-CY90PPf5.js";import{T as O}from"./Tooltip-CrYts5Zz.js";import{L as C}from"./Line-B74ZxJWW.js";import{R as W}from"./RechartsHookInspector-BtEk5fyn.js";import{C as X}from"./Curve-DzPn9elm.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DUh5CxZw.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BglxN53s.js";import"./hooks-BIoyKUdn.js";import"./axisSelectors-C9fo5mxJ.js";import"./zIndexSlice-C8yB0SjJ.js";import"./CartesianChart-Di7ZLiW9.js";import"./chartDataContext-C3H726Iv.js";import"./CategoricalChart-BpFyN0NS.js";import"./CartesianAxis-CWMaA0v8.js";import"./Layer-Dpjv3Z7H.js";import"./Text-Ch2i1yLS.js";import"./DOMUtils-BYd--jqE.js";import"./Label-BFw783un.js";import"./ZIndexLayer-DtdorfOg.js";import"./types-46Crnp6z.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DWbc74gd.js";import"./useElementOffset-DsT0Vt7J.js";import"./iteratee-DBpy2Zkw.js";import"./Cross-TvPCTj9A.js";import"./Rectangle-ClBH0-aW.js";import"./useAnimationId-Pi9wCxwd.js";import"./Sector-JtnSW-LM.js";import"./ReactUtils-DdWnBm1Y.js";import"./ActivePoints-Dejn0HsJ.js";import"./Dot-Bjvjl7Nl.js";import"./RegisterGraphicalItemId-B2X6SVeo.js";import"./ErrorBarContext-B0bCUlMx.js";import"./GraphicalItemClipPath-D9qCdAxL.js";import"./SetGraphicalItem-BpO8akWh.js";import"./getRadiusAndStrokeWidthFromDot-aysjhdrr.js";import"./ActiveShapeUtils-D5tQ5sxS.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BgHkPCBK.js";import"./index-DLTKO4-0.js";import"./ChartSizeDimensions-DHpkkx7o.js";import"./OffsetShower-By9PfpSa.js";import"./PlotAreaShower-BawApXcc.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
