import{e as t}from"./iframe-CU9XYLf3.js";import{R as D,n as p}from"./arrayEqualityCheck-eFaqPFyI.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-Du1ZX9LF.js";import{C as K}from"./CartesianGrid-D5isxS3W.js";import{X as T}from"./XAxis-Bcv7Mskw.js";import{Y as M}from"./YAxis-BemMrlFL.js";import{L as $}from"./Legend-Bhep4iF3.js";import{T as O}from"./Tooltip-D7bf9p2v.js";import{L as C}from"./Line-C8QgLygJ.js";import{R as W}from"./RechartsHookInspector-_W3CqC5M.js";import{C as X}from"./Curve-_cbPrSga.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bb0L8kLp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CMA78OKy.js";import"./hooks-BpNXzUNL.js";import"./axisSelectors-zUwIil_A.js";import"./zIndexSlice-MqfV_Lfv.js";import"./CartesianChart-C7ozkYMn.js";import"./chartDataContext-eO3XCw92.js";import"./CategoricalChart-CnWZI6Fz.js";import"./CartesianAxis-D8E3unsA.js";import"./Layer-DY220JH0.js";import"./Text-CY41MgYr.js";import"./DOMUtils-Dak0oEyJ.js";import"./Label-DXEyh5i9.js";import"./ZIndexLayer-Dc6Gk9II.js";import"./types-B0qniNwz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DqoOcyix.js";import"./useElementOffset-DYTW7eVO.js";import"./iteratee-DCZOOTd4.js";import"./Cross-CjWKJuRA.js";import"./Rectangle-B_wboqG7.js";import"./useAnimationId-VWf3KASX.js";import"./Sector-CkX8bkkx.js";import"./ReactUtils-D-xpVFtM.js";import"./ActivePoints-B2pGhw2h.js";import"./Dot-B5sv6NYe.js";import"./RegisterGraphicalItemId-CSmKkG0q.js";import"./ErrorBarContext-asfsfUUV.js";import"./GraphicalItemClipPath-BoX2yUt9.js";import"./SetGraphicalItem-Dr6ZmOI6.js";import"./getRadiusAndStrokeWidthFromDot-CFQCYzj3.js";import"./ActiveShapeUtils-DlS6WpAj.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BbNzWkoD.js";import"./index-DN73DgGW.js";import"./ChartSizeDimensions-Bvvn8A72.js";import"./OffsetShower-CnaZFh38.js";import"./PlotAreaShower-DsaFxt3j.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
