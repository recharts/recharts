import{R as t}from"./iframe-nnpNEl0c.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-EeSB_m0u.js";import{R as l}from"./zIndexSlice-BIxplyvp.js";import{C as x}from"./ComposedChart-CNqzZLnk.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BUH7Dk3-.js";import{L as a}from"./Line-BBeoyI6l.js";import{X as c}from"./XAxis-DmxowzrZ.js";import{T as g}from"./Tooltip-BM0Kh55K.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-tyPo7vJI.js";import"./Text-D0rrhxSu.js";import"./resolveDefaultProps-D1Co5jVK.js";import"./pageBackground-BLVyr9N2.js";import"./ZIndexLayer-BDSIPNIK.js";import"./index-B_vNRzQ4.js";import"./index-BjMcvTtw.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-jvUDxmEV.js";import"./throttle-CIO-2ra4.js";import"./dataEntryStyles-BmV4LTxI.js";import"./axisSelectors-DWnmhIgM.js";import"./d3-scale-WiXCw0il.js";import"./CartesianAxis-BqAJOGeS.js";import"./Layer-CzHD4ald.js";import"./types-BmjMrM54.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BMWsCoi3.js";import"./index-Db30zo8R.js";import"./index-DcZvMf-G.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-VFnYK8V7.js";import"./index-CONo-L8r.js";import"./CartesianChart-CujBFFkW.js";import"./ZIndexPortal-Cp9AMkdy.js";import"./CategoricalChart-BMMRGjAS.js";import"./LabelList-BNO7oHuM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-bTnZwyFx.js";import"./useAnimationId-CJPhZ8Cq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DRqheEEB.js";import"./tooltipContext-CNUm5XLj.js";import"./RegisterGraphicalItemId-DWpzbaDo.js";import"./ErrorBarContext-BjOiJE8k.js";import"./activeStyles-iZJvEVBW.js";import"./SetGraphicalItem-CRQScpdw.js";import"./getZIndexFromUnknown-DnFkOJYD.js";import"./useEffectiveDataKey-DTKrhjFl.js";import"./omit-ZiBFwhNr.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BBlYovqd.js";import"./step-BJvIh3cb.js";import"./path-DyVhHtw_.js";import"./ActivePoints-J_iA54Fy.js";import"./Dot-BfnVBDM9.js";import"./Symbols-B8oOAKpP.js";import"./symbol-OKw49DjP.js";import"./getRadiusAndStrokeWidthFromDot-DWNEs6NN.js";import"./useElementOffset-D4m3W9N6.js";import"./uniqBy-BtFmVpwe.js";import"./iteratee-DDsc37Zm.js";import"./Cross-BG3dlVif.js";import"./Sector-BDC49zEQ.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
