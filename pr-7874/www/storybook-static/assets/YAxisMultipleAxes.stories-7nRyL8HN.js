import{R as t}from"./iframe-B8WiTaBv.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BeTfGw8Q.js";import{R as l}from"./zIndexSlice-D5_q7rMj.js";import{C as x}from"./ComposedChart-CgOoahPV.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C9mQUHqQ.js";import{L as a}from"./Line-Dg3Mfg7R.js";import{X as c}from"./XAxis-CJ0oEHon.js";import{T as g}from"./Tooltip-DrOPjfNB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BgOirL-a.js";import"./Text-DTdnI9Wt.js";import"./resolveDefaultProps-DE7ai4U1.js";import"./DOMUtils-CVPbEKMw.js";import"./isWellBehavedNumber-BNs6A6nd.js";import"./useId-BQjGOdOZ.js";import"./useBackwardsCompatibleTheme--hv8ghFv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dp2lwUDn.js";import"./index-CkpdDqnf.js";import"./index-CK2GwVFT.js";import"./RechartsWrapper-D4X8qM3L.js";import"./axisSelectors-fwkbTSQU.js";import"./throttle-Bf7HFTSb.js";import"./d3-scale-DPpdjCkc.js";import"./index-BEIQXCWA.js";import"./index-C4vHDdGM.js";import"./renderedTicksSlice-XS0yYXwf.js";import"./index-DFXXQ9h7.js";import"./CartesianAxis-B062qB3S.js";import"./Layer-DykiohLY.js";import"./types-CBGkJi7-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Ct7y2r_J.js";import"./chartDataContext-BzLrqzRe.js";import"./CategoricalChart-DNXrcn0T.js";import"./AnimatedItems-DoJommjq.js";import"./useAnimationId-BEfI3V-Q.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BbDRcByH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ccGnTT5q.js";import"./tooltipContext-DnF1Rmhb.js";import"./RegisterGraphicalItemId-D1erTERG.js";import"./ErrorBarContext-Bffy1Kmi.js";import"./GraphicalItemClipPath-C1v82me1.js";import"./SetGraphicalItem-CT3FOcLU.js";import"./getZIndexFromUnknown-D0nf7nCV.js";import"./useGraphicalItemIdentity-CGETAvly.js";import"./dataEntryStyles-3o-er-t1.js";import"./Curve-CzATnpcO.js";import"./step-pDrJKgS7.js";import"./path-DyVhHtw_.js";import"./ActivePoints-wJ9lpzyc.js";import"./Dot-YjfpD-D0.js";import"./getRadiusAndStrokeWidthFromDot-CRnyj104.js";import"./useElementOffset-JTP_ODLW.js";import"./uniqBy-CnCANcHU.js";import"./iteratee-CdLDDlyj.js";import"./Cross-taMPCnYE.js";import"./Sector-ZgiG7-Ti.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
