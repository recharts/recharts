import{R as t}from"./iframe-Bibrvi93.js";import{a as p}from"./isWellBehavedNumber-DEJNr0Qw.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-D-0PUWPs.js";import{R as T}from"./zIndexSlice-IRdU2Eq4.js";import{C as M}from"./CartesianGrid-ALKh-GIq.js";import{X as $}from"./XAxis-DJh80Lk8.js";import{Y as I}from"./YAxis-C5_c0VAl.js";import{L as O}from"./Legend-DbZ6ctwJ.js";import{T as W}from"./Tooltip-DEVGfLDM.js";import{L as C}from"./Line-pqhmcNHN.js";import{C as X}from"./Curve-CMNJVVoM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DuLA9rob.js";import"./RechartsWrapper-Bt5qeROs.js";import"./axisSelectors-DSlGSk_i.js";import"./throttle-BYyvulfq.js";import"./index-DMM3MhtL.js";import"./index-30mt-Xh2.js";import"./d3-scale-Cv38ge3f.js";import"./index-DWooAmJS.js";import"./index-DnZq9tde.js";import"./renderedTicksSlice-B9WL6t6z.js";import"./index-BJXhTZS7.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CEqCUP4y.js";import"./chartDataContext-uGfw2Upg.js";import"./CategoricalChart-DFHR8N3d.js";import"./CartesianAxis-Cuzpv6zD.js";import"./Layer-DE86HNiB.js";import"./Text-BO_ppYYl.js";import"./pageBackground-XzqliJgP.js";import"./useId-BgICeW4-.js";import"./useBackwardsCompatibleTheme-DU3b-TNc.js";import"./Label-cYp5UoGe.js";import"./ZIndexLayer-CR2StRvF.js";import"./dataEntryStyles-DDDSAcpo.js";import"./types-Bq4foVci.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D6qSh5xw.js";import"./symbol-pYdEuRJm.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CvZM-d1p.js";import"./uniqBy-BUWcx4Iz.js";import"./iteratee-c_7BWdlz.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-CyOwunze.js";import"./Cross-C-7lXx0r.js";import"./Rectangle-tEZ4S3O4.js";import"./util-Dxo8gN5i.js";import"./Sector-Czo3fx6_.js";import"./activeStyles-DrZDHncN.js";import"./ActivePoints-BrjJnJ33.js";import"./Dot-DajOJSdD.js";import"./RegisterGraphicalItemId-Cbm3m_DF.js";import"./ErrorBarContext-BkgPrLn0.js";import"./SetGraphicalItem-CE5ARGmx.js";import"./getRadiusAndStrokeWidthFromDot-CuI68Hzl.js";import"./ActiveShapeUtils-D9IZw5gW.js";import"./useEffectiveDataKey-BbVSYZl7.js";import"./step-CRsn2MAq.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Ut=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ut as __namedExportsOrder,Qt as default};
