import{R as t}from"./iframe-XIWN-8LW.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DaPhatN5.js";import{R as l}from"./zIndexSlice-CeTDvnmV.js";import{C as x}from"./ComposedChart-FUL524Wp.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BoK5fl6t.js";import{L as a}from"./Line-B6hIzkaB.js";import{X as c}from"./XAxis-xF4zDX5U.js";import{T as g}from"./Tooltip-CBhkgzkI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DO8sqqdZ.js";import"./Text-DltUF9fa.js";import"./resolveDefaultProps-B5b48pxf.js";import"./DOMUtils-CCpPdTbp.js";import"./ZIndexLayer-Bd21CySm.js";import"./index-aVJjGtUe.js";import"./index-BkVjohbh.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DQxdihyW.js";import"./throttle-DRx8DeZx.js";import"./axisSelectors-Ct9ZEPSa.js";import"./d3-scale-BvS2o_Zb.js";import"./CartesianAxis-BxPz-Jvl.js";import"./Layer-CxaTRkgO.js";import"./types-CnZsW2lD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DpPQ5RFR.js";import"./index-CLmLkjoe.js";import"./index-DUogMgN_.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BeCgk11S.js";import"./index-pEcVg_GN.js";import"./fillDefinitions-BnpiLimK.js";import"./CartesianChart-Cb1xlur4.js";import"./ZIndexPortal-DjT5vY1_.js";import"./CategoricalChart-xnoIgStO.js";import"./LabelList-DPGWqLfL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-GJprns1h.js";import"./useAnimationId-BQkOAk0c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DHUczxG_.js";import"./tooltipContext--w90yek2.js";import"./dataEntryStyles-GFsHahL2.js";import"./ErrorBarContext-BZ9_Mv4V.js";import"./activeStyles-C-BzGRm8.js";import"./SetGraphicalItem-DypkohdD.js";import"./getZIndexFromUnknown-Cp4HeYf6.js";import"./useEffectiveDataKey-qss65ryL.js";import"./omit-COE3kS8C.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BDW_2Enz.js";import"./step-D7Gnf8qO.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CytZfQ5l.js";import"./Dot-8IXYnCyr.js";import"./Symbols-Cwdzyt52.js";import"./symbol-DWZ08l1L.js";import"./getRadiusAndStrokeWidthFromDot-DRDDou6B.js";import"./useElementOffset-BeOaSn6a.js";import"./uniqBy-DWstni_N.js";import"./iteratee-D75QKWW0.js";import"./Cross-BHDzPOic.js";import"./Sector-0QEj3RzN.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
