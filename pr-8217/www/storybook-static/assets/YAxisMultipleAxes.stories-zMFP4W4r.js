import{R as t}from"./iframe-DB1dQNP8.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CIxMAlZN.js";import{R as l}from"./zIndexSlice-4nnTulLE.js";import{C as x}from"./ComposedChart-CXmJ-ojD.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DEBVvE7y.js";import{L as a}from"./Line-CHe47qf6.js";import{X as c}from"./XAxis-CMTVdgXW.js";import{T as g}from"./Tooltip-zM5lYojB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-jFA6iMVu.js";import"./Text-C1medGIX.js";import"./resolveDefaultProps-DmpFbxUX.js";import"./ZIndexLayer-CWhMC-q_.js";import"./index-DDVC-U_9.js";import"./index-CCD7ra-J.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CrHx5sYT.js";import"./throttle-BFaVdKGa.js";import"./axisSelectors-DYpJMmPb.js";import"./d3-scale-BO6-R8pB.js";import"./CartesianAxis-C8e-4BIf.js";import"./Layer-Dv8-s5I6.js";import"./types-DtWjgFmy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BBAl23GW.js";import"./index-D-0kkOAc.js";import"./index-BBS885gB.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BSa1uinT.js";import"./index-D2MojgXH.js";import"./fillDefinitions-Cx6IehzG.js";import"./CartesianChart-DYBxU76V.js";import"./chartDataContext-B1lnzDGG.js";import"./CategoricalChart-DANutzlC.js";import"./dataEntryStyles-Cv4r99AD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DIjJyhRJ.js";import"./useAnimationId-CoLe5YqV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bsyq6LIm.js";import"./tooltipContext-BbtR5UQH.js";import"./ErrorBarContext-XalCVz8w.js";import"./activeStyles-ByNnOm-i.js";import"./SetGraphicalItem-BpLBLRYe.js";import"./getZIndexFromUnknown-CzADK01Y.js";import"./useEffectiveDataKey-H48CmBWB.js";import"./omit-DgzgNLve.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CckPV-p0.js";import"./step-Bnr8fo0T.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CSEAww-_.js";import"./Dot-oe6mnN2l.js";import"./Symbols-UlDypbOg.js";import"./symbol-CJrx0ghD.js";import"./getRadiusAndStrokeWidthFromDot-BxCLKzYD.js";import"./useElementOffset-RlCX_v1O.js";import"./uniqBy-CbTOLIgk.js";import"./iteratee-BDHXi_B6.js";import"./Cross-EnSMQpLy.js";import"./Sector-C_yr-by2.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
