import{e as t}from"./iframe-CiPNgAw4.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-D3BtMUGk.js";import{g as l}from"./arrayEqualityCheck-C6nfogx3.js";import{C as x}from"./ComposedChart-CbPk0YX9.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-CQsMh6Ip.js";import{L as a}from"./Line-DcN9XZ8g.js";import{X as A}from"./XAxis-BLKgRQop.js";import{T as g}from"./Tooltip-jRF_hFrM.js";import{R as f}from"./RechartsHookInspector-CVL4J5oe.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CWGiyJPj.js";import"./Layer-tX1B1sjt.js";import"./resolveDefaultProps-BDpBhHr1.js";import"./Text-BwxXBXY0.js";import"./DOMUtils-D_v29T4S.js";import"./Label-C61zhpRD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D-L4yEZ6.js";import"./zIndexSlice-BxzsaYhB.js";import"./immer-BXEbVIgV.js";import"./types-DpsbB84I.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Bj7nK2mV.js";import"./hooks-BI7NI193.js";import"./axisSelectors-Cy_y_L06.js";import"./d3-scale-CMk2gc8P.js";import"./RechartsWrapper-D7DJEHdB.js";import"./index-DQVpqsS2.js";import"./CartesianChart-BCFleW8G.js";import"./chartDataContext-BajvTs6w.js";import"./CategoricalChart-DbOO-7mB.js";import"./tooltipContext-BNVb3LYw.js";import"./ReactUtils-2ol7Qocl.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DVoj5wPa.js";import"./isPlainObject-32kxwUzR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvhSXBPG.js";import"./useAnimationId-ZolSEiin.js";import"./Trapezoid-DD_RcOCU.js";import"./Sector-Cott3o-2.js";import"./Symbols-CZNQWcFs.js";import"./symbol-DD46dP6C.js";import"./step-DNW2l5aF.js";import"./Curve-CIk8sgOv.js";import"./RegisterGraphicalItemId-Cfezvs_M.js";import"./ErrorBarContext-DeoWvLpT.js";import"./GraphicalItemClipPath-KikDG9N5.js";import"./SetGraphicalItem-Cc5PlSKV.js";import"./getZIndexFromUnknown-C4t-cI7u.js";import"./graphicalItemSelectors-CCnqSED4.js";import"./ActivePoints-9r2oCFw-.js";import"./Dot-DSD9slKq.js";import"./getRadiusAndStrokeWidthFromDot-CjDQOwTJ.js";import"./useElementOffset-BTbIUCG9.js";import"./uniqBy-C_cZU6b-.js";import"./iteratee-Drtbgz-g.js";import"./Cross-2PZ7Q5B8.js";import"./index-BVLD_GdP.js";import"./ChartSizeDimensions-BUpN4cof.js";import"./OffsetShower-BX6EEwKB.js";import"./PlotAreaShower-D9cRvfnk.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Tt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Tt as __namedExportsOrder,kt as default};
