import{R as t}from"./iframe-BVidFuBg.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CAK7lAdx.js";import{R as l}from"./zIndexSlice-BVu_VJKn.js";import{C as x}from"./ComposedChart-CeoyKEhO.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BXuoWdGf.js";import{L as a}from"./Line-BwWsnMpN.js";import{X as c}from"./XAxis-D6ghc140.js";import{T as g}from"./Tooltip-D2nd5wLd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Dkr2cH3E.js";import"./Text-B-jeJZdK.js";import"./resolveDefaultProps-BnMAchLG.js";import"./pageBackground-DWUaDsTL.js";import"./isWellBehavedNumber-Bgrep7-b.js";import"./useId-B-SrM2oo.js";import"./useBackwardsCompatibleTheme-CdbVLEqd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Diklw-mz.js";import"./index-qH4-zIlS.js";import"./index-DBJQpaC5.js";import"./axisSelectors-7sszg3SW.js";import"./throttle-BSCmJhty.js";import"./d3-scale-n9zBPjXr.js";import"./CartesianAxis-B6O3GOLV.js";import"./Layer-BamX7bDZ.js";import"./types-d1h9D5Nt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-X2qP0nh3.js";import"./index-BiOB95Co.js";import"./index-k6xKkYdd.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-7A4GvPw3.js";import"./index-CYZL9Ecm.js";import"./CartesianChart-BVao4mhK.js";import"./chartDataContext-KRrlptML.js";import"./CategoricalChart-B9oBZckD.js";import"./activeStyles-DLYfLCId.js";import"./useAnimationId-DUX3gKYN.js";import"./dataEntryStyles-doFW0jSZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BXXUvRMI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-OFRSQ0pw.js";import"./tooltipContext-BqBG8QeW.js";import"./ErrorBarContext-DCSMt2xY.js";import"./GraphicalItemClipPath-BHt5dg8Z.js";import"./SetGraphicalItem-COgSsKbs.js";import"./getZIndexFromUnknown-C7WzXeP1.js";import"./useEffectiveDataKey-BG2pu5J2.js";import"./omit-VTPt9SYu.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DADC3Qn9.js";import"./step-DQ_5Whcs.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CkjWSogS.js";import"./Dot-08nNQsA3.js";import"./getRadiusAndStrokeWidthFromDot-DtsjXIq5.js";import"./useElementOffset-DGDKGLsn.js";import"./uniqBy-DnZxk8gC.js";import"./iteratee-BSh9UVJS.js";import"./Cross-B_3lqDDg.js";import"./Sector-Dc8MKQa3.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
