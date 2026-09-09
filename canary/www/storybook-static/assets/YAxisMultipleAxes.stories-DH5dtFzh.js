import{R as t}from"./iframe-DkIbxCKI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CwdPxCpD.js";import{R as l}from"./zIndexSlice-CHbZzwgN.js";import{C as x}from"./ComposedChart-AmLF4jNt.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DBwLR-Jq.js";import{L as a}from"./Line-CENLuU9r.js";import{X as c}from"./XAxis-BPLEkIZ2.js";import{T as g}from"./Tooltip-C95UPDi7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DXoCOeOg.js";import"./Text-BbOUDRzF.js";import"./resolveDefaultProps-BevWDyyN.js";import"./DOMUtils-BUKWldcd.js";import"./isWellBehavedNumber-fyAAr-BE.js";import"./useId-8qRrdFWs.js";import"./useBackwardsCompatibleTheme-BwQOOq4w.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BJyXs-Ro.js";import"./index-yECzrrEn.js";import"./index-B09gEsNA.js";import"./RechartsWrapper-CqxFYmG2.js";import"./axisSelectors-B_cE3_9l.js";import"./throttle-CWb9XQe7.js";import"./d3-scale-8ot6xaxi.js";import"./index-CgyukL1G.js";import"./index-x7Df9KyH.js";import"./renderedTicksSlice-DyBDLYr8.js";import"./index-BccjzSMV.js";import"./CartesianAxis-5Nq6xx1I.js";import"./Layer-D7vk6n2M.js";import"./types-CwHWliOY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CLeTDcJ1.js";import"./chartDataContext-CWOneN2n.js";import"./CategoricalChart-De8d0Fqy.js";import"./AnimatedItems-CIN2lrWw.js";import"./useAnimationId-DMHPZlQv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CcvMQD5l.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CMEDiyrE.js";import"./tooltipContext-D_1DAJCL.js";import"./RegisterGraphicalItemId-lA-3F1_K.js";import"./ErrorBarContext-C70mMVNC.js";import"./GraphicalItemClipPath-DKslCQDi.js";import"./SetGraphicalItem-CEswJxM0.js";import"./getZIndexFromUnknown-D7dPzLOV.js";import"./useGraphicalItemIdentity-BZv1ZQCF.js";import"./Curve-D-aQyXcF.js";import"./step-DQQJ3aEt.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CzJuPhh_.js";import"./Dot-D2yhY2N9.js";import"./getRadiusAndStrokeWidthFromDot-CpjzEu0-.js";import"./useElementOffset-Br7ppT_A.js";import"./uniqBy-BUgSc2Cm.js";import"./iteratee-DkJdq8oi.js";import"./Cross-CIdlY32l.js";import"./Sector-ZXLenKXH.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
