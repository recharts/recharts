import{R as t}from"./iframe-BXyks5nv.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-8vdoPbT3.js";import{R as l}from"./zIndexSlice-DGicPDgx.js";import{C as x}from"./ComposedChart-DVDq1QlG.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-uTMPVT3q.js";import{L as a}from"./Line-CrCqIcra.js";import{X as c}from"./XAxis-CgBDJfd7.js";import{T as g}from"./Tooltip-Jqt-JmAE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DVoMofK2.js";import"./Text-DpKdLlQu.js";import"./resolveDefaultProps-t9RGNc5u.js";import"./pageBackground-ButgTNwE.js";import"./ZIndexLayer-aWdCgojo.js";import"./index-Brvwee9M.js";import"./index-W4KahICV.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DMqgJFL7.js";import"./throttle-BMtt0Eqt.js";import"./axisSelectors-58u8_YZx.js";import"./d3-scale-BgObkVdI.js";import"./CartesianAxis-BC_l_0hm.js";import"./Layer-x02rJScX.js";import"./types-DxlZCjsw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-kjkWbf2b.js";import"./index-DYE61kxi.js";import"./index-CNe8-YXd.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-ybz91CxZ.js";import"./index-Ci615jxM.js";import"./CartesianChart-BvGgkH75.js";import"./ZIndexPortal-97xDukRB.js";import"./CategoricalChart-BARINQPN.js";import"./LabelList-BWqHNOr4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ozvy3-Co.js";import"./useAnimationId-DXaogzGC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6rYuavq.js";import"./tooltipContext-JspXPy5S.js";import"./dataEntryStyles-stu4dp7O.js";import"./ErrorBarContext-B3eXKAAe.js";import"./activeStyles-CF_8K1QH.js";import"./SetGraphicalItem-CyPK3B5U.js";import"./getZIndexFromUnknown-CMXoB80-.js";import"./useEffectiveDataKey-BzrOPzFS.js";import"./omit-BEEzFRQP.js";import"./isArguments-yB-y1yaH.js";import"./Curve-vaJ426Dg.js";import"./step-C3BUyQnl.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CiLNzEVX.js";import"./Dot-B9UDymE8.js";import"./Symbols-B41tlq-V.js";import"./symbol-CQEHnXxm.js";import"./getRadiusAndStrokeWidthFromDot-Di4p4gXQ.js";import"./useElementOffset-UnC9RugP.js";import"./uniqBy-CPmH6AFC.js";import"./iteratee-E2moU9SK.js";import"./Cross-D6iHirvt.js";import"./Sector-DIbroa-0.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
