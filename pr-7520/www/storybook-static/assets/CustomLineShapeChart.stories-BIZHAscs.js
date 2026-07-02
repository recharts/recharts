import{R as t}from"./iframe-BiO1LFJs.js";import{a as p}from"./isWellBehavedNumber-Dxkk48kL.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-hobzGqpN.js";import{R as T}from"./zIndexSlice-CmtXwCpm.js";import{C as M}from"./CartesianGrid-DDsPSIUw.js";import{X as $}from"./XAxis-BRwCq2oj.js";import{Y as I}from"./YAxis-JFjnQJGm.js";import{L as O}from"./Legend-DGK-zcSs.js";import{T as W}from"./Tooltip-n88-j1Kq.js";import{L as C}from"./Line-1_BYKPYm.js";import{C as X}from"./Curve-kUjOM15F.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-gKXUf8-9.js";import"./RechartsWrapper-CzSMI4by.js";import"./index-De8uMPL0.js";import"./index-xoOEAtk6.js";import"./index-CQxwz_yZ.js";import"./index-aP1SqDBB.js";import"./throttle-CSNtF4Q0.js";import"./renderedTicksSlice-DYPlU4wm.js";import"./axisSelectors-C_E3bYBf.js";import"./d3-scale-B0MWpAf5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-IjCJKDDX.js";import"./chartDataContext-Dd2hF0M7.js";import"./CategoricalChart-CD1H2W0S.js";import"./CartesianAxis-Bp6siJa-.js";import"./Layer-H8Y9pDd0.js";import"./Text-BSmuYjPa.js";import"./DOMUtils-DsPsNFwh.js";import"./Label-CZnmw5cu.js";import"./ZIndexLayer-P1dNdSQJ.js";import"./types-Bn2J_DOa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DD05aFL0.js";import"./symbol-UBJpJrB_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-dpEKlp0x.js";import"./uniqBy-BVXibjHx.js";import"./iteratee-C9sw1IiS.js";import"./useAnimationId-CvsS4m8J.js";import"./Cross-TOJOS5mm.js";import"./Rectangle-CTCiy3q0.js";import"./util-Dxo8gN5i.js";import"./Sector-CAilI50V.js";import"./AnimatedItems-DgpiirzW.js";import"./ActivePoints-BKJaC1Uq.js";import"./Dot-B5F-cqV_.js";import"./RegisterGraphicalItemId-DTynMESK.js";import"./ErrorBarContext-DCf_sWWl.js";import"./GraphicalItemClipPath-BeoHEVW6.js";import"./SetGraphicalItem-BmZzevIp.js";import"./getRadiusAndStrokeWidthFromDot-DCnDKADl.js";import"./ActiveShapeUtils-Bl46xbNE.js";import"./step-CvpshmWh.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Nt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Nt as __namedExportsOrder,Bt as default};
