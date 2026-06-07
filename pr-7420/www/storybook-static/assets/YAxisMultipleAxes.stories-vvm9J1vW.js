import{R as t}from"./iframe-ebWVliJd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CXtDAlyU.js";import{R as l}from"./zIndexSlice-BrrGtknp.js";import{C as x}from"./ComposedChart-BOJ1HV40.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DpeW8n5w.js";import{L as a}from"./Line-BIWAc-1H.js";import{X as c}from"./XAxis-BweeNrXM.js";import{T as g}from"./Tooltip-Cvab7GjA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D4k_mNx-.js";import"./CartesianAxis-R8Sp45dD.js";import"./Layer-CrSVK8w0.js";import"./resolveDefaultProps-B5O-6-WI.js";import"./Text-C6J-h8kC.js";import"./DOMUtils-D1VV_WMD.js";import"./isWellBehavedNumber-DRTDdH6f.js";import"./Label-CEbu9yOv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DymXXG8t.js";import"./index-CMkBnQa6.js";import"./index-Ca07HsLe.js";import"./types-DIjbaJzk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Ba1ooYto.js";import"./immer-u2yF5cyx.js";import"./RechartsWrapper-DUxjIduK.js";import"./index-DF02JQD9.js";import"./index-r7VIACUV.js";import"./axisSelectors-BiXUDLnL.js";import"./d3-scale-BkusLtz6.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BJML043z.js";import"./chartDataContext-DV3K9IA2.js";import"./CategoricalChart-DdVMa29B.js";import"./tooltipContext-XWcfhW_R.js";import"./AnimatedItems-VPYkwJ4F.js";import"./index-BPJnJB5S.js";import"./useAnimationId-n62HywHx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cbetr6hK.js";import"./ActiveShapeUtils-WXdDf590.js";import"./RegisterGraphicalItemId-YmUQslDz.js";import"./ErrorBarContext-4bUYjOjX.js";import"./GraphicalItemClipPath-CLalv2k5.js";import"./SetGraphicalItem-DrFDycKg.js";import"./getZIndexFromUnknown-CKtdBG35.js";import"./graphicalItemSelectors-D4vnKPw5.js";import"./Curve-Cnpigwxh.js";import"./step-CrKVzxVu.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B8szihic.js";import"./Dot-DBDb90gK.js";import"./getRadiusAndStrokeWidthFromDot-viuhEb9q.js";import"./useElementOffset-DUZdlllQ.js";import"./uniqBy-O9s4KUKR.js";import"./iteratee-ftXPOfk-.js";import"./Cross-TTvTr8g_.js";import"./Sector-DNOEb9QS.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
