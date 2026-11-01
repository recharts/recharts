import{R as t}from"./iframe-D4WxERWR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-oI30KIzY.js";import{R as l}from"./zIndexSlice-Ctb-XE3r.js";import{C as x}from"./ComposedChart-Bw102KtD.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CrxDxOUL.js";import{L as a}from"./Line-umjtcrXx.js";import{X as c}from"./XAxis-CSUQYPZm.js";import{T as g}from"./Tooltip-C28rp3v5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DI6ASMtN.js";import"./Text-DwZS23az.js";import"./resolveDefaultProps-CcZJ3F4Z.js";import"./DOMUtils-Dfn1BJxK.js";import"./ZIndexLayer-Czs-NT3b.js";import"./index-DBKc-d7M.js";import"./index-BrtN9C6M.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-29BSG3By.js";import"./throttle-YSLka_uT.js";import"./axisSelectors-CDo6nEPG.js";import"./d3-scale-DUPxeW1L.js";import"./CartesianAxis-CWiuRNLE.js";import"./Layer-Cql_Pemo.js";import"./types-Bl0q8uU6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-nOQMzdpc.js";import"./index-CN65hpd1.js";import"./index-CSWYxHgR.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BABrVhwD.js";import"./index-DUxamRCa.js";import"./fillDefinitions-LA2OUO3V.js";import"./CartesianChart-CoO-_Rza.js";import"./ZIndexPortal-CgOieTb4.js";import"./CategoricalChart-BsaTkIBD.js";import"./LabelList-CQQZHleH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CKjrVYq4.js";import"./useAnimationId-VHvbbifh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ExAh61OK.js";import"./tooltipContext-8HRhQMzM.js";import"./dataEntryStyles-Q9NassVy.js";import"./ErrorBarContext-f8d14flb.js";import"./activeStyles-BIi7TIST.js";import"./SetGraphicalItem-BTGcX_vm.js";import"./getZIndexFromUnknown-DQoUiOZn.js";import"./useEffectiveDataKey-BiVeMsFi.js";import"./omit-Bt-KoeMF.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CCgKIDxa.js";import"./step-BXgucIl4.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CTDmaIKH.js";import"./Dot--NIPiAHj.js";import"./Symbols-C5JQpjZ0.js";import"./symbol-DvMe5rhC.js";import"./getRadiusAndStrokeWidthFromDot-DuPKRIUg.js";import"./useElementOffset-DucCROoJ.js";import"./uniqBy-D_80LO3-.js";import"./iteratee-CWtaTKWH.js";import"./Cross-CWHoCY7b.js";import"./Sector-DHTcqVpn.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
