import{R as t}from"./iframe-C8BOwi09.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-5qfCryrA.js";import{R as l}from"./zIndexSlice-BhlUeiz9.js";import{C as x}from"./ComposedChart-BOY6dDEf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C2U3c-NG.js";import{L as a}from"./Line-VLqzwl_7.js";import{X as c}from"./XAxis-Dm5Odjs3.js";import{T as g}from"./Tooltip-Dc0rIQtR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Cxci_11r.js";import"./CartesianAxis-CWGT70cF.js";import"./Layer--iJ-Hj_L.js";import"./resolveDefaultProps-SXD4-6tw.js";import"./Text-DAXgjhqJ.js";import"./DOMUtils-Bk8mghFc.js";import"./isWellBehavedNumber-lzhpgNRQ.js";import"./Label-D4SfTv0v.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CKEhnbZx.js";import"./index-C1vV4PmY.js";import"./index-B-s74sFu.js";import"./types-BPAGzNH6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-LkhfGRkv.js";import"./throttle-DKEMBEBf.js";import"./RechartsWrapper-A-Jl6gDU.js";import"./index-CXTehsJH.js";import"./index-TdmA2U4u.js";import"./axisSelectors--BiFDCId.js";import"./d3-scale-Aru4SClR.js";import"./CartesianChart-CPjCvOHT.js";import"./chartDataContext-C3Wv6QtC.js";import"./CategoricalChart-qjM85PCb.js";import"./tooltipContext-Dtceov_d.js";import"./AnimatedItems-DJI9G60d.js";import"./useAnimationId-C1RCoeBd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B5iv9bX_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DN8fg87N.js";import"./RegisterGraphicalItemId-D2rzI2r-.js";import"./ErrorBarContext-DLDAFGHH.js";import"./GraphicalItemClipPath-DQUZZg6C.js";import"./SetGraphicalItem-544HumqF.js";import"./getZIndexFromUnknown-QOlWSk1A.js";import"./graphicalItemSelectors-Bizb05lq.js";import"./Curve-CCSLWrMV.js";import"./step-CUCFWzj3.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BCpRhB6w.js";import"./Dot-Czqb6tax.js";import"./getRadiusAndStrokeWidthFromDot-Bhp0VpHF.js";import"./useElementOffset-D3uxDO7B.js";import"./uniqBy-DDmV_BGS.js";import"./iteratee-Br5fFLhE.js";import"./Cross-CKnG02mU.js";import"./Sector-cFQ9Aldc.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
