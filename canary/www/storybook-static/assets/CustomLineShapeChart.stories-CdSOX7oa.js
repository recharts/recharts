import{R as t}from"./iframe-DnFxx7IH.js";import{a as s}from"./isWellBehavedNumber-DwCdsfaa.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DmEqAzxd.js";import{R as T}from"./zIndexSlice-DMQesRjL.js";import{C as M}from"./CartesianGrid-CF1ZFW_G.js";import{X as $}from"./XAxis-IDSfm9bg.js";import{Y as I}from"./YAxis-CEWgAKNT.js";import{L as O}from"./Legend-Ca_KDK-L.js";import{T as W}from"./Tooltip-ar0y9lJP.js";import{L as C}from"./Line-Di-BkjaJ.js";import{C as X}from"./Curve-J32t11pu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BrQSc28h.js";import"./RechartsWrapper-BEVhWh0t.js";import"./index-GUUQK7eb.js";import"./index-CAdU6H6S.js";import"./index-rcoyIDVk.js";import"./index-Brqhvl0Y.js";import"./throttle-D9ypYn8O.js";import"./axisSelectors-5k6UVVXW.js";import"./d3-scale-Bs_R4IxC.js";import"./renderedTicksSlice-D0pYs9KP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DEdd4Z6y.js";import"./chartDataContext-DJs6EXfK.js";import"./CategoricalChart-DJUCMkjn.js";import"./CartesianAxis-BE4Vor5z.js";import"./Layer-D_Gfp3eA.js";import"./Text-DMuBrTIK.js";import"./DOMUtils-L7csA6Z4.js";import"./useId-DrpNe8Nn.js";import"./useBackwardsCompatibleTheme-DDCq5JLw.js";import"./Label--8_ga_Yz.js";import"./ZIndexLayer-DWUDk33_.js";import"./types-BDVRIOHN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Bz-bEPn5.js";import"./symbol-B6M4kKq8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-uQ8Z7oyS.js";import"./uniqBy-BPRwV-au.js";import"./iteratee-DD5UE0pF.js";import"./useAnimationId-CvbAXd24.js";import"./Cross-CWVEStLb.js";import"./Rectangle-DIvdGauu.js";import"./util-Dxo8gN5i.js";import"./Sector-DRopt2OG.js";import"./AnimatedItems-C4h-Xaxi.js";import"./ActivePoints-6Gybe8Hc.js";import"./Dot-CMt5bDBr.js";import"./RegisterGraphicalItemId-CKqNw0Tr.js";import"./ErrorBarContext-UyjGsXAe.js";import"./GraphicalItemClipPath-Cr1fTws_.js";import"./SetGraphicalItem-BEKqBC8O.js";import"./getRadiusAndStrokeWidthFromDot-Dzo4OknT.js";import"./ActiveShapeUtils-DMhAfvBj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-Bso1aipe.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
