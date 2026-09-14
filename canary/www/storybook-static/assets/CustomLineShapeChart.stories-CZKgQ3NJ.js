import{R as t}from"./iframe-C8hleUub.js";import{a as p}from"./isWellBehavedNumber-B3eGUodw.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-D1_N9eUn.js";import{R as T}from"./zIndexSlice-vCE-ybpn.js";import{C as M}from"./CartesianGrid-CgFVxxAM.js";import{X as $}from"./XAxis-R1M6mi21.js";import{Y as I}from"./YAxis-abD2mpGE.js";import{L as O}from"./Legend-BZNCHYTe.js";import{T as W}from"./Tooltip-Vor344cH.js";import{L as C}from"./Line-ByuQgILV.js";import{C as X}from"./Curve-CIcYFtSq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-K4N7KwiK.js";import"./RechartsWrapper-C_qv-3Hz.js";import"./axisSelectors-2_wVdrP-.js";import"./throttle-DqZhpB0B.js";import"./index-YGCqGUHr.js";import"./index-Ybsy0-7F.js";import"./d3-scale-5YAUGhno.js";import"./index-BNE3_iNf.js";import"./index-DRei1T7T.js";import"./renderedTicksSlice-NbxY696c.js";import"./index-D7OGaE6M.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BMIYUzX5.js";import"./chartDataContext-CXErNkaS.js";import"./CategoricalChart-ZxlZFsha.js";import"./CartesianAxis-D9UtSAv7.js";import"./Layer-Bnkm0B65.js";import"./Text-CGkuih9W.js";import"./DOMUtils-Chkxh9Pu.js";import"./useId-BChEDpq7.js";import"./useBackwardsCompatibleTheme-D4jGgcPz.js";import"./Label-Dx4oA-8H.js";import"./ZIndexLayer-BFXWo7W3.js";import"./types-CanoAHyf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BmSYL37f.js";import"./symbol-C11Oalrt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BtmZHt_r.js";import"./uniqBy-Czc-xqRe.js";import"./iteratee-BftLTKNs.js";import"./useAnimationId-lPT865ra.js";import"./Cross-DQsjb1RE.js";import"./Rectangle-BI9aQQPe.js";import"./util-Dxo8gN5i.js";import"./Sector-D28aMowq.js";import"./AnimatedItems-CjbyLJ1n.js";import"./ActivePoints-CMDHZxxf.js";import"./Dot-CXjyuPw6.js";import"./RegisterGraphicalItemId-BA4uM9gD.js";import"./ErrorBarContext-DZ7sAk5y.js";import"./GraphicalItemClipPath-LpKqTX6v.js";import"./SetGraphicalItem-KHbn2Vk7.js";import"./getRadiusAndStrokeWidthFromDot-DVFiqn2t.js";import"./ActiveShapeUtils-BDBm5gcU.js";import"./useGraphicalItemIdentity-FCLYk-L1.js";import"./step-DrIu7wrv.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
