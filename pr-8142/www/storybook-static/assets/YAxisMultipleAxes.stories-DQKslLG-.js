import{R as t}from"./iframe-Dzq6KhZI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BZEADbr5.js";import{R as l}from"./zIndexSlice-DYy_9E3f.js";import{C as x}from"./ComposedChart-ZLGekMnz.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-LqRue3qu.js";import{L as a}from"./Line-BjRSCYND.js";import{X as c}from"./XAxis-Cwq9lpMm.js";import{T as g}from"./Tooltip-Db2d9pWw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-ns1HN8QT.js";import"./Text-D6SfU34x.js";import"./resolveDefaultProps-BRjkVoLn.js";import"./DOMUtils-Dv3oYuXo.js";import"./ZIndexLayer-B0fPlQAE.js";import"./index-BecjNu5M.js";import"./index-DZ0fS5qA.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BWIDzk5M.js";import"./throttle-PAjjPANm.js";import"./axisSelectors-B8Xp5jln.js";import"./d3-scale-BwgC5IAo.js";import"./CartesianAxis-DeYfDX_6.js";import"./Layer-DdRdeMHx.js";import"./types-Bt-JjK9T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B-37bEiL.js";import"./index-CVNCOx1i.js";import"./index-CMF9Loaq.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Du3nHOoA.js";import"./index-DAhgw1CA.js";import"./fillDefinitions-BkZRDt9Y.js";import"./CartesianChart-Bid-fMci.js";import"./ZIndexPortal-D7MLJjGY.js";import"./CategoricalChart-dB5tt0RG.js";import"./LabelList-0dTnEet5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BEWurK0o.js";import"./useAnimationId-B5vYW3bS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-qY34SWQy.js";import"./tooltipContext-Dantp0Or.js";import"./dataEntryStyles-BDzv2dJf.js";import"./ErrorBarContext-DWqusyea.js";import"./activeStyles-B6qdsX9q.js";import"./SetGraphicalItem-C8-iEcE-.js";import"./getZIndexFromUnknown-Cvy0i2cX.js";import"./useEffectiveDataKey-2DeBYWTa.js";import"./omit-CIlgakHL.js";import"./isArguments-yB-y1yaH.js";import"./Curve-GBvSi4lY.js";import"./step-CPy7v0ge.js";import"./path-DyVhHtw_.js";import"./ActivePoints-APIfm04L.js";import"./Dot-BGvDEhvz.js";import"./Symbols-CuwHSUOy.js";import"./symbol-5MHZNE2z.js";import"./getRadiusAndStrokeWidthFromDot-CAouDUSk.js";import"./useElementOffset-L0DqCH6F.js";import"./uniqBy-wUI6H3pU.js";import"./iteratee-2KPcfIOh.js";import"./Cross-DM8bh02F.js";import"./Sector-Cnt-x8fY.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
