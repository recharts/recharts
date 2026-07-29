import{R as t}from"./iframe-Bx8H2Ifg.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DhvpkuSq.js";import{R as l}from"./zIndexSlice-CibQQwTH.js";import{C as x}from"./ComposedChart-wQ-fmNIT.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-T6ht_xZt.js";import{L as a}from"./Line-BVmQtC22.js";import{X as c}from"./XAxis-DdmuYybV.js";import{T as g}from"./Tooltip-BcMh87Zj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DzJ0MnYC.js";import"./Layer-B1Bv1tpm.js";import"./resolveDefaultProps-atv84skJ.js";import"./Text-DTS3udCG.js";import"./DOMUtils-B-4npwaq.js";import"./isWellBehavedNumber-BjCfjx0l.js";import"./Label-DbBEn_Ke.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C7frmUa_.js";import"./index-D7D5zQI-.js";import"./index--RF86Un6.js";import"./types-Dz5mzedy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BNkNmyy9.js";import"./throttle-DcH5jY9T.js";import"./RechartsThemeContext-CzAT56ie.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DXti2BhE.js";import"./index-DZMfkQNN.js";import"./index-CDB7Uuo1.js";import"./axisSelectors-Cw32qcc-.js";import"./d3-scale-DWE49Teg.js";import"./CartesianChart-B8KEQc2q.js";import"./chartDataContext-TCBOpZph.js";import"./CategoricalChart-D_-fj6zl.js";import"./tooltipContext-BUmusmOg.js";import"./AnimatedItems-CwxdPZKw.js";import"./useAnimationId-BtPQFk12.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BXj7PHVN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D4eokJlb.js";import"./RegisterGraphicalItemId-B2iGTOcQ.js";import"./ErrorBarContext-BI-oQ816.js";import"./GraphicalItemClipPath-B35L0Cvh.js";import"./SetGraphicalItem-CrnQ6XAB.js";import"./getZIndexFromUnknown-CP1rFc8E.js";import"./graphicalItemSelectors-CqQ9gRtD.js";import"./Curve-dStP5J8a.js";import"./step-BYuX5L52.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BilhKSxD.js";import"./Dot-bxDDkr32.js";import"./getRadiusAndStrokeWidthFromDot-cCEJEDsq.js";import"./useElementOffset-DNIfR18S.js";import"./uniqBy-Dxv0QDCx.js";import"./iteratee-BhoZeZsJ.js";import"./Cross-ChkFCt86.js";import"./Sector-CybYrglf.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
