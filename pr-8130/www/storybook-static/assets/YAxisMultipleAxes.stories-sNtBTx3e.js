import{R as t}from"./iframe-BV4BJT-m.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DrgVb9Ay.js";import{R as l}from"./zIndexSlice-B-lthx1D.js";import{C as x}from"./ComposedChart-CPNwWKj6.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DO37x2do.js";import{L as a}from"./Line-CIJrCJ5v.js";import{X as c}from"./XAxis-Dddiy3kS.js";import{T as g}from"./Tooltip-BZU_FemD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-xll97smN.js";import"./Text-CO85_-F3.js";import"./resolveDefaultProps-cT9z_f7M.js";import"./DOMUtils-CzRokdgO.js";import"./ZIndexLayer-B03KVd1Z.js";import"./index-BWsZwQHL.js";import"./index-BMMrxHO4.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CB1xu3bt.js";import"./throttle-2G-03cGC.js";import"./axisSelectors-DnTNEhev.js";import"./d3-scale-9I0ClQu9.js";import"./CartesianAxis-D1XYtW-z.js";import"./Layer-C4zlYTAs.js";import"./types-CgGLncla.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-un3BJh88.js";import"./index-Cwzrr77V.js";import"./index-CwDo1ygF.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BCKkTVf1.js";import"./index-BO-EQm5K.js";import"./fillDefinitions-CsvVa8gn.js";import"./CartesianChart-D730y8QU.js";import"./ZIndexPortal-DvrYxin1.js";import"./CategoricalChart-BPH2EWzV.js";import"./LabelList-B3uF9y0j.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CtlT2XYk.js";import"./useAnimationId-BaOUwCNw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DdIRCGmC.js";import"./tooltipContext-GDisYEj5.js";import"./dataEntryStyles-Bs_-V5Jc.js";import"./ErrorBarContext-CgppqQDQ.js";import"./activeStyles-DPABJUlt.js";import"./SetGraphicalItem-BojvnrYu.js";import"./getZIndexFromUnknown-DopZR3Lo.js";import"./useEffectiveDataKey-ydzJPEOM.js";import"./omit-Kyb53XVe.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BxOKje4W.js";import"./step-CflYfM9D.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CpdWeHKB.js";import"./Dot-ChrRm5q7.js";import"./Symbols-D8__1CQa.js";import"./symbol-CNlre4TP.js";import"./getRadiusAndStrokeWidthFromDot-nytBruEY.js";import"./useElementOffset-DOPUcnVK.js";import"./uniqBy-D2Xk11H0.js";import"./iteratee-BIIV1qIF.js";import"./Cross-Bnmd-8yp.js";import"./Sector-B6aReDRK.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
