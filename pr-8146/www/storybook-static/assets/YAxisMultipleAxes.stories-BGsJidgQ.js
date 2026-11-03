import{R as t}from"./iframe-BSZdIOb1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BidQV3Bs.js";import{R as l}from"./zIndexSlice-x95uaAeG.js";import{C as x}from"./ComposedChart-CDWJbZ6n.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DjeOXSf4.js";import{L as a}from"./Line-CwNvjckU.js";import{X as c}from"./XAxis-G0FofNWa.js";import{T as g}from"./Tooltip-CqW2RsM8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cim8hMW4.js";import"./Text-Bz3RDDRF.js";import"./resolveDefaultProps-D3SG1Voa.js";import"./DOMUtils-bqeGnrQd.js";import"./ZIndexLayer-yq1Eddx2.js";import"./index-MExGibHi.js";import"./index-zsHkXx4R.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-3PQGkC2Y.js";import"./throttle-CSUb4-AW.js";import"./axisSelectors-YkanTYDO.js";import"./d3-scale-4UnkzbhN.js";import"./CartesianAxis-DAsXTQiH.js";import"./Layer-uHX297jU.js";import"./types-Dvrgl9IY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BJuGaZyZ.js";import"./index-bJBh3omb.js";import"./index-TMoyXsD5.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BkCZoC17.js";import"./index-KnfBFAge.js";import"./fillDefinitions-DxVVI7tr.js";import"./CartesianChart-Bw5m5b1-.js";import"./ZIndexPortal-4kIQjZh0.js";import"./CategoricalChart-DA0Cyxxs.js";import"./LabelList-lC_U3aX6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CmV7ANCN.js";import"./useAnimationId-CA_zjy4c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D_M0EMWZ.js";import"./tooltipContext-CK842sh_.js";import"./dataEntryStyles-CFBEHlKQ.js";import"./ErrorBarContext-Co8GUKFe.js";import"./activeStyles-DKcFBEEB.js";import"./SetGraphicalItem-C-eJsLZg.js";import"./getZIndexFromUnknown-ByKrhZh8.js";import"./useEffectiveDataKey-e2XyZYHS.js";import"./omit-DVYwvLGy.js";import"./isArguments-yB-y1yaH.js";import"./Curve-ClwfprbW.js";import"./step-DTMXh9wp.js";import"./path-DyVhHtw_.js";import"./ActivePoints-x8Ig6mBR.js";import"./Dot-BTQ1Y3aj.js";import"./Symbols-CWFcXiNy.js";import"./symbol-DRMp_7qO.js";import"./getRadiusAndStrokeWidthFromDot-CVUy3O5W.js";import"./useElementOffset-d8UGFEqu.js";import"./uniqBy-BVEW4IKF.js";import"./iteratee-dTH4fWHS.js";import"./Cross-BJ4HZEIQ.js";import"./Sector-BvCyOl-r.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
