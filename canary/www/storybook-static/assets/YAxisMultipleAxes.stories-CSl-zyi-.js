import{R as t}from"./iframe-CV_Focqb.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B-5hoebp.js";import{R as l}from"./zIndexSlice-BMlZ-BTA.js";import{C as x}from"./ComposedChart-MH3garqG.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DRk89vZc.js";import{L as a}from"./Line-DHwzAAmS.js";import{X as c}from"./XAxis-CbmbdddR.js";import{T as g}from"./Tooltip-DeD9NHFI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Du5iQDtH.js";import"./Text-DkcQkg85.js";import"./resolveDefaultProps-BHR6OE-9.js";import"./pageBackground-CnYdCkRU.js";import"./ZIndexLayer-mZMt123c.js";import"./index-CjhSLlbk.js";import"./index-Beg8UZ9d.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C3BM8mNN.js";import"./throttle-B3rCyY-p.js";import"./dataEntryStyles-BVJSTixW.js";import"./axisSelectors-BxeWYXvo.js";import"./d3-scale-CaWFw3Yv.js";import"./CartesianAxis-CQt-kkqP.js";import"./Layer-CsEez_y-.js";import"./types-DM7Vi8Am.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BoOYYKQz.js";import"./index-CURBXMxT.js";import"./index-B3f3WOos.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-gHoUEC4B.js";import"./index-M6ICInBl.js";import"./CartesianChart-Db9Ekhbm.js";import"./ZIndexPortal-AZ5cZsws.js";import"./CategoricalChart-DWAHsGuD.js";import"./LabelList-DREKrdKH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkrXeBYw.js";import"./useAnimationId-DuuBzQL8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-180icphM.js";import"./tooltipContext-C5kefYz7.js";import"./RegisterGraphicalItemId-r-VYbJMs.js";import"./ErrorBarContext-CdrVSUrx.js";import"./activeStyles-gddFfhxG.js";import"./SetGraphicalItem-BpTteZzJ.js";import"./getZIndexFromUnknown-hBVwK3Ok.js";import"./useEffectiveDataKey-CjigGJWt.js";import"./omit-COEAGa6S.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BuhBl-mk.js";import"./step-BlU7WG28.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CZ1Bkl4s.js";import"./Dot-BSQDV2JF.js";import"./Symbols-iEBpa06p.js";import"./symbol-CX01f9Tn.js";import"./getRadiusAndStrokeWidthFromDot-BmGx7Z4E.js";import"./useElementOffset-BdGXytv2.js";import"./uniqBy-CNcyodij.js";import"./iteratee-D2eul8Fy.js";import"./Cross-DKgdkYiG.js";import"./Sector-BG1ok6Xp.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
