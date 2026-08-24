import{R as t}from"./iframe-vymQxHWj.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C5MuLC6_.js";import{R as l}from"./zIndexSlice-CKW_xCBG.js";import{C as x}from"./ComposedChart-Cp91ph6L.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DCO0mLA3.js";import{L as a}from"./Line-Cne7Fv2j.js";import{X as c}from"./XAxis-Bzr2Ibny.js";import{T as g}from"./Tooltip-DEDk_-lP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CMMqvv98.js";import"./Text-BroBeAan.js";import"./resolveDefaultProps-D1QpgZPc.js";import"./DOMUtils-BKNZKxmm.js";import"./isWellBehavedNumber-CX2OxNKy.js";import"./useId-DUfTRFy5.js";import"./useBackwardsCompatibleTheme-DlCKuGJZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ChwVVG6J.js";import"./index-DA8rq6pv.js";import"./index-BGTNdYjX.js";import"./RechartsWrapper-98W6zG7g.js";import"./index-Cl4zISxW.js";import"./index-C2Yz5dWj.js";import"./throttle-BK01krp9.js";import"./axisSelectors-qkXPFIdN.js";import"./d3-scale-shLsO6db.js";import"./renderedTicksSlice-_g-coWrV.js";import"./CartesianAxis-CmNHn6lS.js";import"./Layer-DHaSl27L.js";import"./types-ZBx8sWKw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D1QWtDZ4.js";import"./chartDataContext-CLrXA2d3.js";import"./CategoricalChart-htsvTMax.js";import"./AnimatedItems-BAUw0A61.js";import"./useAnimationId-DSN2oeL8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-5xjAPvdj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Uk3GF-jB.js";import"./tooltipContext-BNSiOswh.js";import"./RegisterGraphicalItemId-DsxpdmKR.js";import"./ErrorBarContext-D9mVK9PP.js";import"./GraphicalItemClipPath-LHrRH_dp.js";import"./SetGraphicalItem-BeZQQame.js";import"./getZIndexFromUnknown-BaZocLEn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-1S1dbJJ6.js";import"./Curve-BcJWtVmj.js";import"./step-BtdsF4BX.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C-mtjouo.js";import"./Dot-QKBcefll.js";import"./getRadiusAndStrokeWidthFromDot-ClysWG4b.js";import"./useElementOffset-CqDgkesb.js";import"./uniqBy-Cz9SOFAs.js";import"./iteratee-Dg79fSga.js";import"./Cross-DXCXTPs9.js";import"./Sector-B_NnGxXE.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
