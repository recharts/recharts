import{R as t}from"./iframe-tfhlM7RE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-h2SUOBLw.js";import{R as l}from"./zIndexSlice-B471v4Lb.js";import{C as x}from"./ComposedChart-CtzbjDUj.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-pTnDyAVt.js";import{L as a}from"./Line-bh6qw2At.js";import{X as c}from"./XAxis-B7I9Q0Cl.js";import{T as g}from"./Tooltip-BCCeYETg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Dc9_QYO6.js";import"./Text-5W0Vtyw-.js";import"./resolveDefaultProps-DL75x_1S.js";import"./pageBackground-0qhqc0cB.js";import"./useId-Bzzww67M.js";import"./ZIndexLayer-C-CGrvp9.js";import"./index-BTN7W_Yl.js";import"./index-lTJQPG4X.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BpOt7LI8.js";import"./throttle-CXjKONS2.js";import"./dataEntryStyles-D3tcZitS.js";import"./axisSelectors-DJx7DAnJ.js";import"./d3-scale-D6t4zM3P.js";import"./CartesianAxis-DyvVeGzf.js";import"./Layer-BL0J2r_i.js";import"./types-D9bKTCt9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DbMZHvdq.js";import"./index-Dv3JWEH0.js";import"./index-HYmTeb2Q.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DDpiUUXi.js";import"./index-MeXGvWIN.js";import"./CartesianChart-DU4kdG2u.js";import"./chartDataContext-DaAlq-l7.js";import"./CategoricalChart-CUmY4tZ5.js";import"./activeStyles-BEaPJgw0.js";import"./useAnimationId-BfuVUtmA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BYTDxp40.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DJsr9xRk.js";import"./tooltipContext-D3OGS0fz.js";import"./RegisterGraphicalItemId-KBiFRx-Y.js";import"./ErrorBarContext-WVyXc6eb.js";import"./SetGraphicalItem-nKtDGPi3.js";import"./getZIndexFromUnknown-BbOLndiI.js";import"./useEffectiveDataKey-Vj1bvM5G.js";import"./omit-qKxEFnb5.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BOSLFwGN.js";import"./step-B0V8T17V.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C0JmsTOw.js";import"./Dot-DqxCp5yP.js";import"./Symbols-B52ZExKH.js";import"./symbol-BSe1lArF.js";import"./getRadiusAndStrokeWidthFromDot-DpOR5CEC.js";import"./useElementOffset-COxlkJtV.js";import"./uniqBy-tG89lOwe.js";import"./iteratee-cVMjOz7p.js";import"./Cross-CY3Zzw98.js";import"./Sector-BSPpeyjV.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
