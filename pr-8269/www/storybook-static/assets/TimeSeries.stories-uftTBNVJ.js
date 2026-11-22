import{R as e}from"./iframe-D3OoUODQ.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DxYJ1EU_.js";import{R as h}from"./zIndexSlice-COWEW-Xi.js";import{C as g}from"./ComposedChart-DQRy8yMm.js";import{L as x}from"./Line-DTJc0zlp.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Bhy6LUlh.js";import{T as V}from"./Tooltip-DbEsMo9d.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CVUrBvYb.js";import"./Layer-CUNP0nq5.js";import"./resolveDefaultProps-D7e-YcsR.js";import"./Text-B7Tip8P2.js";import"./ZIndexLayer-pJsGLsvY.js";import"./index-BvJXc9H1.js";import"./index-DNUqbDgJ.js";import"./Label-DLZY1r_b.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BlC5408P.js";import"./throttle-xK3Qigov.js";import"./types-CZJIyhtF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bv3FRj9F.js";import"./index-CwGsCBa_.js";import"./index-E-9zXcGM.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DItDxN6k.js";import"./RechartsWrapper-DuOKGUDD.js";import"./index-C8PiA1g3.js";import"./fillDefinitions-C2yGMN51.js";import"./CartesianChart-C7rzbaUy.js";import"./chartDataContext-BbEB-BoJ.js";import"./CategoricalChart-CKoarJJf.js";import"./getRadiusAndStrokeWidthFromDot-C3VB5n7j.js";import"./Curve-eYin-GPV.js";import"./step-FwrJA5dq.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-k3Cv11yP.js";import"./ActivePoints-BDuWcJUa.js";import"./Dot-DopO49Vm.js";import"./activeStyles-DXsSD8Lh.js";import"./useAnimationId-z8xHYNfC.js";import"./Symbols-BcqMzhTU.js";import"./symbol-CCC5v9lz.js";import"./ErrorBarContext-Cw_znsk2.js";import"./SetGraphicalItem-BlH5pIAO.js";import"./ActiveShapeUtils--1e6XE9v.js";import"./useEffectiveDataKey-BHKjwOuj.js";import"./useElementOffset-C-GaNZer.js";import"./uniqBy-UVF7xo-s.js";import"./iteratee-VlIYTG9d.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C2kdLByN.js";import"./Rectangle-Sm9oSXXR.js";import"./util-Dxo8gN5i.js";import"./Sector-CRAkgMpQ.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
