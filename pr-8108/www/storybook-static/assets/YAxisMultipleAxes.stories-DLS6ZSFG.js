import{R as t}from"./iframe-6K1b1-eT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-_GZI3dYv.js";import{R as l}from"./zIndexSlice-B780JRIC.js";import{C as x}from"./ComposedChart-B8GwPjuZ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-J_x1lf0G.js";import{L as a}from"./Line-CKyMQ0XF.js";import{X as c}from"./XAxis-ClhB_79n.js";import{T as g}from"./Tooltip-BJDj-_ph.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BWjzWDJx.js";import"./Text-CdUlZS4M.js";import"./resolveDefaultProps-BYoWz9Yk.js";import"./pageBackground-j7FwZ6MF.js";import"./ZIndexLayer-BCfq-6yJ.js";import"./index-Crbtmu02.js";import"./index-DtOoPLNq.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DAIX196M.js";import"./throttle-CBl9h_oH.js";import"./axisSelectors-C-rSKBiJ.js";import"./d3-scale-vHo5DJBH.js";import"./CartesianAxis-D2Tqoy9W.js";import"./Layer-CJqJ-HtM.js";import"./types-O5YDoWOS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DsuMbTii.js";import"./index-fwe0fbm7.js";import"./index-C8-Ylk7e.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DqVTXzd2.js";import"./index-EJ_yhvZY.js";import"./CartesianChart-Cvo7HdWy.js";import"./ZIndexPortal-wkZ6Ra_J.js";import"./CategoricalChart-CqHWKoUt.js";import"./LabelList-Da0m2dvB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BNPdRBQn.js";import"./useAnimationId-DP-ttVRU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-9jaloMvW.js";import"./tooltipContext-CgwHjfe-.js";import"./dataEntryStyles-DGPpD66W.js";import"./ErrorBarContext-BrR5ewV-.js";import"./activeStyles-C1gmhpCf.js";import"./SetGraphicalItem-CxuWSH9Y.js";import"./getZIndexFromUnknown-DzWOtZd_.js";import"./useEffectiveDataKey-Cqgp5Kke.js";import"./omit-Dy7X2uA0.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BTrtI1QS.js";import"./step-nJPm-9z_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DfBmAS04.js";import"./Dot-mjfNbHvX.js";import"./Symbols-j-UxEopj.js";import"./symbol-Ccjplwna.js";import"./getRadiusAndStrokeWidthFromDot-9YrPK3Nw.js";import"./useElementOffset-c1RTDdmp.js";import"./uniqBy-OJKX_qkV.js";import"./iteratee-ItMtgKsp.js";import"./Cross-pOdMossD.js";import"./Sector-uQBxxe0t.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
