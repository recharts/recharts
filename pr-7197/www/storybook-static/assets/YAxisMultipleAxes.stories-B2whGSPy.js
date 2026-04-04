import{e as t}from"./iframe-C2tGGjcA.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BWTDEGMA.js";import{R as l}from"./arrayEqualityCheck-BU-juwUe.js";import{C as x}from"./ComposedChart-DayldmqV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DV2I5Dl0.js";import{L as a}from"./Line-DJLQaP34.js";import{X as A}from"./XAxis-B3stUdiP.js";import{T as g}from"./Tooltip-BTf40Vva.js";import{R as f}from"./RechartsHookInspector-OVWL5RuZ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C6X8qFWR.js";import"./Layer-DkBbKCaQ.js";import"./resolveDefaultProps-B8hWxOXb.js";import"./Text-Bh-qeukp.js";import"./DOMUtils-CeJzVK9F.js";import"./Label-CR6_Nrr4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CwH7lvHt.js";import"./zIndexSlice-C7QkOMmM.js";import"./immer-_oM2zjxd.js";import"./types-BqNjVw0B.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DflWSLZG.js";import"./hooks-BZM1IfiG.js";import"./axisSelectors-hCgVeVzv.js";import"./d3-scale-BwpTFf5Z.js";import"./RechartsWrapper-D3vVxtfU.js";import"./index-D-_8hcei.js";import"./CartesianChart-JwGyw0GC.js";import"./chartDataContext-Mxcb3X27.js";import"./CategoricalChart-CloeZ4Py.js";import"./tooltipContext-B__M27xF.js";import"./ReactUtils-DgRasAzu.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-EmfZ6gwX.js";import"./isPlainObject-BG4W1lTc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-jZnK6OPy.js";import"./useAnimationId-BPqjt2CS.js";import"./Trapezoid-Cl-OWzTg.js";import"./Sector-IdhW6Sh6.js";import"./Symbols-BW2J6Sn7.js";import"./symbol-CsNNy4jV.js";import"./step-CB6j9muh.js";import"./Curve-3ofIPf5W.js";import"./RegisterGraphicalItemId-CvlZwjiz.js";import"./ErrorBarContext-VVzEJg2g.js";import"./GraphicalItemClipPath-DE_aTN3O.js";import"./SetGraphicalItem-DZyDJnZv.js";import"./getZIndexFromUnknown-CLOYo0fG.js";import"./graphicalItemSelectors-N3YAWMo4.js";import"./ActivePoints-BmxyddQB.js";import"./Dot-DIQAy5B9.js";import"./getRadiusAndStrokeWidthFromDot-C3Gfg5xu.js";import"./useElementOffset-B3k4jRRT.js";import"./uniqBy-Ct-WozvE.js";import"./iteratee-CXSu4ZJt.js";import"./Cross-ClCChjxn.js";import"./index-BLdpS26r.js";import"./ChartSizeDimensions-DbZPdrpK.js";import"./OffsetShower-CCVPYATS.js";import"./PlotAreaShower-p59PN-FQ.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
