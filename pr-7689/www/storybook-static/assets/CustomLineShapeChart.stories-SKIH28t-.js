import{R as t}from"./iframe-OWn8oF1A.js";import{a as s}from"./isWellBehavedNumber-BZ7ES7WU.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-ZQmO2lsS.js";import{R as T}from"./zIndexSlice-CwJzB82v.js";import{C as M}from"./CartesianGrid-Dfups2-I.js";import{X as $}from"./XAxis-CCMr852Y.js";import{Y as I}from"./YAxis-CRJnLbnO.js";import{L as O}from"./Legend-BAxAQ2CS.js";import{T as W}from"./Tooltip-GkMt5zv4.js";import{L as C}from"./Line-DkBHzBVs.js";import{C as X}from"./Curve-CeJvEjjA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-IEje57sC.js";import"./RechartsWrapper-i1jsdj22.js";import"./index-CM0MgkCu.js";import"./index-C9Vm6jKM.js";import"./index-CrP56Nug.js";import"./index-NwmZ423s.js";import"./throttle-DWaXsXNb.js";import"./axisSelectors-BcSe1XYn.js";import"./d3-scale-CwANqbyk.js";import"./renderedTicksSlice-Sc5c_SM5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D8znfAM6.js";import"./chartDataContext-fxx91kDP.js";import"./CategoricalChart-CCczjnIs.js";import"./CartesianAxis-DE3Bauq7.js";import"./Layer-CqyZBrFC.js";import"./Text-P3K5HdaU.js";import"./DOMUtils-DW9lfnAW.js";import"./useId-BS68P7zj.js";import"./useBackwardsCompatibleTheme-B7aULi62.js";import"./Label-AqmTYyGt.js";import"./ZIndexLayer-C9URSHi7.js";import"./types-qoS_u5dB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols--FRgZ-u1.js";import"./symbol-BSDGb50L.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CL4Ag10e.js";import"./uniqBy-C7xqcq1F.js";import"./iteratee-Co34_xBw.js";import"./useAnimationId-B2Oo-Kvv.js";import"./Cross-BYCrvAN8.js";import"./Rectangle-9cgaQESO.js";import"./util-Dxo8gN5i.js";import"./Sector-DeRk1Vpf.js";import"./AnimatedItems-_CvB9alV.js";import"./ActivePoints-nFn7e4bI.js";import"./Dot-COcUPaQ9.js";import"./RegisterGraphicalItemId-zybFqkLh.js";import"./ErrorBarContext-BicDrW-x.js";import"./GraphicalItemClipPath-BKywaUa4.js";import"./SetGraphicalItem-BiApMsd9.js";import"./getRadiusAndStrokeWidthFromDot-DqQ5ADme.js";import"./ActiveShapeUtils-5n9-MhSP.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-D_RWTSpX.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Jt as __namedExportsOrder,Ht as default};
