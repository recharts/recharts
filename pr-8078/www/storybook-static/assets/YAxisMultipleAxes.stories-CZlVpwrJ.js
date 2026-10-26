import{R as t}from"./iframe-BofWz4pi.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D1oxSTTV.js";import{R as l}from"./zIndexSlice-DPHCingP.js";import{C as x}from"./ComposedChart-D_3KSeQ5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-5dLPkDhq.js";import{L as a}from"./Line-B0vqUN1D.js";import{X as c}from"./XAxis-7mtD4Kk1.js";import{T as g}from"./Tooltip-DHASBblv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CCUawDng.js";import"./Text-Cod3bNx5.js";import"./resolveDefaultProps-DKgUGYpY.js";import"./pageBackground-CLiAzPgV.js";import"./useId-CsDd5jlc.js";import"./ZIndexLayer-ZOq897pe.js";import"./index-Ch52J8fd.js";import"./index-budgZ99k.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-5SLj1vDB.js";import"./throttle-CD21hIR0.js";import"./dataEntryStyles-EsxEhXM1.js";import"./axisSelectors-BlRUD72R.js";import"./d3-scale-BBiuonxv.js";import"./CartesianAxis-DEogGjPj.js";import"./Layer-bLQQfVOZ.js";import"./types-Da0w2MOX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DguNpOt6.js";import"./index-CCD_p5-C.js";import"./index-BTJxJJp6.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-uhVYqXCO.js";import"./index-DGPf-g6A.js";import"./CartesianChart-Bw0i9iF5.js";import"./chartDataContext-f6L6P8Kq.js";import"./CategoricalChart-DMR2DLHI.js";import"./activeStyles-B7UPTptH.js";import"./useAnimationId-CM0h2zlX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BNojMJrW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-jlvddXY2.js";import"./tooltipContext-DcHtwD0Y.js";import"./RegisterGraphicalItemId-C_30UGno.js";import"./ErrorBarContext-D5pMarzn.js";import"./SetGraphicalItem-Cxhb9Qmq.js";import"./getZIndexFromUnknown-BONwhvkQ.js";import"./useEffectiveDataKey-CF-diEWF.js";import"./omit-B1JbUKAI.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CFeHUPSl.js";import"./step-A_Fv11J5.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DgVnIIPK.js";import"./Dot-DoIuuVTb.js";import"./getRadiusAndStrokeWidthFromDot-Py8UGwCM.js";import"./useElementOffset-B4a6RQjs.js";import"./uniqBy-DiB2KEwv.js";import"./iteratee-CfR7qh40.js";import"./Cross-Cj2oQu0f.js";import"./Sector-ma2Hi-5z.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
