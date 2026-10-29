import{R as t}from"./iframe-C0OVyiWZ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BzGOPf-n.js";import{R as l}from"./zIndexSlice-8GqqcFEr.js";import{C as x}from"./ComposedChart-CDKrU3QJ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CBHHOqe1.js";import{L as a}from"./Line-dhCJc3l8.js";import{X as c}from"./XAxis-CTdfh09z.js";import{T as g}from"./Tooltip-XY3lqBp8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-YEc5vJ1L.js";import"./Text-CW0hOv-I.js";import"./resolveDefaultProps-CzOTGDv8.js";import"./DOMUtils-C9FX__jF.js";import"./ZIndexLayer-lUVq37sV.js";import"./index-Docwyysm.js";import"./index-ZerhtVY0.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DTm6eoEL.js";import"./throttle-D68qy_th.js";import"./axisSelectors-D80ZAqVH.js";import"./d3-scale-P-FUFzKf.js";import"./CartesianAxis-B5NtJHos.js";import"./Layer-OalOUm3Y.js";import"./types-C-qeruIO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CUInauOX.js";import"./index-B1LAm-dY.js";import"./index-BpCkqUEo.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CTQttuVZ.js";import"./index-C5porGIG.js";import"./fillDefinitions-Bbw8sRrt.js";import"./CartesianChart-DeRNlyJ8.js";import"./ZIndexPortal-wZgZSnoL.js";import"./CategoricalChart-BEVcLfMu.js";import"./LabelList-D0ai-hpm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bj8y9oTS.js";import"./useAnimationId-CezZ2glr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DL-meZDZ.js";import"./tooltipContext-21ewW2ab.js";import"./dataEntryStyles-Cd6CZepp.js";import"./ErrorBarContext-Crxfy6Lq.js";import"./activeStyles-D_QsSvZV.js";import"./SetGraphicalItem-CFBhhEbP.js";import"./getZIndexFromUnknown-Bh8-1w9i.js";import"./useEffectiveDataKey-AC38WMBQ.js";import"./omit-DWjYnwJ8.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C3dcNtoz.js";import"./step-CZORxbW4.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BUz8lbCF.js";import"./Dot-b3sd19D9.js";import"./Symbols-BDZG6tZB.js";import"./symbol-BmFAGqI-.js";import"./getRadiusAndStrokeWidthFromDot-DztWYVRU.js";import"./useElementOffset-BE4RQkQy.js";import"./uniqBy-Cmw3QRKv.js";import"./iteratee-CPh3NlRT.js";import"./Cross-BW8A5PNh.js";import"./Sector-Dm6iledg.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
