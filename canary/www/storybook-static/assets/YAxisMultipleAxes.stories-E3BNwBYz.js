import{R as t}from"./iframe-DMAX8_B_.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DHMD8bK9.js";import{R as l}from"./zIndexSlice-BVHCVdkF.js";import{C as x}from"./ComposedChart-DTOc-N3k.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cmvb1KlD.js";import{L as a}from"./Line-Baz5RTuv.js";import{X as c}from"./XAxis-C1NK8RoH.js";import{T as g}from"./Tooltip-f6oj6N-9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CAcaahuf.js";import"./Text-BwCj1acG.js";import"./resolveDefaultProps-Q3rDitrf.js";import"./pageBackground-BEqOe7lR.js";import"./isWellBehavedNumber-9EXxFos5.js";import"./useId-BVZoqUN1.js";import"./useBackwardsCompatibleTheme-BxWKmMDT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-YH55ha4J.js";import"./index-Dqqrq3j2.js";import"./index-t_NEKWw0.js";import"./axisSelectors-xVjud6VL.js";import"./throttle-B-jnSQsL.js";import"./d3-scale-BX29oM_v.js";import"./CartesianAxis-BiWmv3xt.js";import"./Layer-bgHLcwl9.js";import"./types-mmDyRX3a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C6uANPht.js";import"./index-KGIc8sd0.js";import"./index-CBEUuOpp.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-1Z3_sa1T.js";import"./index-BQc2wBrK.js";import"./CartesianChart-Bezscfrc.js";import"./chartDataContext-D-vUUGf6.js";import"./CategoricalChart-lpsuDSMi.js";import"./activeStyles-B1Ozispl.js";import"./useAnimationId-DjHV_c7w.js";import"./dataEntryStyles-Bgri-3l2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-PLb_DD4F.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CH9-BPrn.js";import"./tooltipContext-C61lU4k-.js";import"./ErrorBarContext-eOToNj9e.js";import"./GraphicalItemClipPath-DrxfmPj-.js";import"./SetGraphicalItem-Car8jOkS.js";import"./getZIndexFromUnknown-B7k7nw6m.js";import"./useEffectiveDataKey-BofpFvC7.js";import"./Curve-BI1HfCSQ.js";import"./step-CY3LQZxJ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C7MlG4p_.js";import"./Dot-CxQ4QLtB.js";import"./getRadiusAndStrokeWidthFromDot-CzuCL_No.js";import"./useElementOffset-irp2r8bU.js";import"./uniqBy-DSnL4fsO.js";import"./iteratee-BgbH2_Qr.js";import"./Cross-Cjp1Cd0j.js";import"./Sector-CDCH7ALJ.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
