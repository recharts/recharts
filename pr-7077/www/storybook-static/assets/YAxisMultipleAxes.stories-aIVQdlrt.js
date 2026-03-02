import{e as t}from"./iframe-XFn8o3qI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-DlNOg73C.js";import{R as l}from"./arrayEqualityCheck-DoWZ8Al-.js";import{C as x}from"./ComposedChart-CqHuuwTM.js";import{B as o}from"./Bar-ChBOK4PN.js";import{L as a}from"./Line-CI-PKSEE.js";import{X as c}from"./XAxis-wsJSxX26.js";import{T as A}from"./Tooltip-tprePoLa.js";import{R as g}from"./RechartsHookInspector-D90IXMov.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-j4wY0iFh.js";import"./Layer-DCadlIaL.js";import"./resolveDefaultProps-DasUcEmR.js";import"./Text-Bl76oSnc.js";import"./DOMUtils-DhQP54ma.js";import"./Label-BlYwY5-1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DWBavU2w.js";import"./zIndexSlice-BaTuqdfU.js";import"./immer-Hw8ZlrcX.js";import"./types-Bj0G5aQF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Dl0HjFeM.js";import"./hooks-CgDMZSu6.js";import"./axisSelectors-B-8e66Qc.js";import"./d3-scale-BECtu2Jj.js";import"./RechartsWrapper-Bqol093Z.js";import"./index-DNZJK2gS.js";import"./CartesianChart-CtYhkutQ.js";import"./chartDataContext-C4USeiES.js";import"./CategoricalChart-BM4cINHZ.js";import"./tooltipContext-ZAGbgBUG.js";import"./ReactUtils-B41U7gki.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-MPa98qw4.js";import"./isPlainObject-CuZzfPHd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-kXtUPCc6.js";import"./useAnimationId-DlDP6-K6.js";import"./Trapezoid-CWabxdPa.js";import"./Sector-DJqtk5y0.js";import"./Symbols-zbF4VeV5.js";import"./symbol-D6QfEsFp.js";import"./step-DeRmKfqt.js";import"./Curve-C3P9kzpN.js";import"./RegisterGraphicalItemId-JBTo95SG.js";import"./ErrorBarContext-BybKQWHl.js";import"./GraphicalItemClipPath-Cv74D6gd.js";import"./SetGraphicalItem-gSI2Cn_M.js";import"./getZIndexFromUnknown-DaJ1le1w.js";import"./graphicalItemSelectors-Cido0Juo.js";import"./ActivePoints-BMnMeirf.js";import"./Dot-BXU7GTUQ.js";import"./getRadiusAndStrokeWidthFromDot-YxhzX5we.js";import"./useElementOffset-DwQncf8i.js";import"./uniqBy-DWvxnCXh.js";import"./iteratee-Bgtm80pD.js";import"./Cross-DUUA83z7.js";import"./index-BCvGM1bQ.js";import"./ChartSizeDimensions-BgEuIf6D.js";import"./OffsetShower-2hoMWt5-.js";import"./PlotAreaShower-D2hH_gCG.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
