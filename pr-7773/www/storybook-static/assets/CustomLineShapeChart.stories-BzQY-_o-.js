import{R as t}from"./iframe-BkVFpUlY.js";import{a as p}from"./isWellBehavedNumber-CfBMT12P.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DvPs3lyp.js";import{R as T}from"./zIndexSlice-DsJvGkf_.js";import{C as M}from"./CartesianGrid-le4hu2Up.js";import{X as $}from"./XAxis-DKVVz-sZ.js";import{Y as I}from"./YAxis-ydoiCG45.js";import{L as O}from"./Legend-BtNq6Pa5.js";import{T as W}from"./Tooltip-DccnUyf0.js";import{L as C}from"./Line-Bb6pgpT5.js";import{C as X}from"./Curve-j6CNmiH0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BteSFwB2.js";import"./RechartsWrapper-odbOlBoE.js";import"./axisSelectors-B50PWx2F.js";import"./throttle-BmqzJcEu.js";import"./index-0hsVYWu6.js";import"./index-DymoF_97.js";import"./d3-scale-DYQ4LMXq.js";import"./index-Q5aHXVFQ.js";import"./index-YkbYvVvq.js";import"./renderedTicksSlice-CwTU9gZs.js";import"./index-DUxWWrkZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CqMhYxBy.js";import"./chartDataContext-VrlvbsLo.js";import"./CategoricalChart-CzfSjKl0.js";import"./CartesianAxis-CKyL8NSQ.js";import"./Layer-DQ1QN6bj.js";import"./Text-BIwedGTb.js";import"./DOMUtils-BcDWMqtm.js";import"./useId-Cugd2wLY.js";import"./useBackwardsCompatibleTheme-bP9OoM6q.js";import"./Label-Cg9XptP0.js";import"./ZIndexLayer-CfoAs0yr.js";import"./types-CKn4wQG_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B3HUvLyw.js";import"./symbol-DQsNkJaP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CXmZJxz2.js";import"./uniqBy-CqDyWSTv.js";import"./iteratee-CmG9r8ck.js";import"./useAnimationId-Bk6mcJf6.js";import"./Cross-sNUSYXkO.js";import"./Rectangle-Cy_w7-0b.js";import"./util-Dxo8gN5i.js";import"./Sector-ChGJ4nNP.js";import"./AnimatedItems-BpowKEth.js";import"./ActivePoints-De3lIG5I.js";import"./Dot-D7W2BemX.js";import"./RegisterGraphicalItemId-C4Vmg6Ny.js";import"./ErrorBarContext-BYIQqhKW.js";import"./GraphicalItemClipPath-KjuHWuk-.js";import"./SetGraphicalItem-BGmRK6gI.js";import"./getRadiusAndStrokeWidthFromDot-QIQHTPvf.js";import"./ActiveShapeUtils-BSJyn28s.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-BxPdVPhz.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
