import{R as t}from"./iframe-nQqwH7QJ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CBsB2GS9.js";import{R as l}from"./zIndexSlice-36iharMl.js";import{C as x}from"./ComposedChart-DjVQQbR_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BS9aWayt.js";import{L as a}from"./Line-qqwSMB27.js";import{X as c}from"./XAxis-CJ63RViA.js";import{T as g}from"./Tooltip-BjxfiNg_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label--FIUnsrD.js";import"./Text-1TJRO8Pn.js";import"./resolveDefaultProps-sxdLwWpt.js";import"./ZIndexLayer-uBy8TOlo.js";import"./index-oe7CujVI.js";import"./index-II4F3WAY.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DDvt0jLt.js";import"./throttle-B0HUB5U4.js";import"./axisSelectors-Dnfm47Aa.js";import"./d3-scale-CE_Y-rH6.js";import"./CartesianAxis-DQ3vG01G.js";import"./Layer-Bx429Rld.js";import"./types-jTE1kqYu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-5pmkjT89.js";import"./index-BNIQZt4j.js";import"./index-D3qCcLe1.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CIP5uBJJ.js";import"./index-Im8qdnHn.js";import"./fillDefinitions-ZO6Wo39I.js";import"./CartesianChart-CIqAWzMx.js";import"./chartDataContext-CFytY-UH.js";import"./CategoricalChart-D4LSu4XN.js";import"./dataEntryStyles-D2Yj78tL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-adiPADn5.js";import"./useAnimationId-BDVyTCS1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C7OOt6yj.js";import"./tooltipContext-CnOYYd66.js";import"./ErrorBarContext-CKcJf7fb.js";import"./activeStyles-DbesfPTr.js";import"./SetGraphicalItem-BquQie6d.js";import"./getZIndexFromUnknown-C7F7HqS8.js";import"./useEffectiveDataKey-C12iG63u.js";import"./omit-B17aVvbF.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CGPupWIw.js";import"./step-BhHvwrte.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BO92Iyzv.js";import"./Dot-BPCTuswq.js";import"./Symbols-BWEY_vml.js";import"./symbol-t7fE5m4B.js";import"./getRadiusAndStrokeWidthFromDot-rJ-p2Gf9.js";import"./useElementOffset-BMJszRZD.js";import"./uniqBy-rfJhXBOv.js";import"./iteratee-C4T-0Dkz.js";import"./Cross-CaQX_rVb.js";import"./Sector-BYDhkgQE.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
