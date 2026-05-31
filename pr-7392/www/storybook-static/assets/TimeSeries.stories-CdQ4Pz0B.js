import{c as e}from"./iframe-BLrz4bzL.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-B81A99CY.js";import{g as y}from"./zIndexSlice-c7WW4zRb.js";import{C as g}from"./ComposedChart-CpLjAKKa.js";import{L as x}from"./Line-DP0xx6zw.js";import{t as T,s as A,f as C,e as E,b as M,g as b,h as w,i as D,c as r}from"./d3-scale-DXSYU9tD.js";import{T as V}from"./Tooltip-D7rWINP6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CEp8r7kA.js";import"./CartesianAxis-BoM_TQOb.js";import"./Layer-CRR_7s_x.js";import"./resolveDefaultProps-NE4wXzst.js";import"./Text-dr0MBeU-.js";import"./DOMUtils-CfWUtkPu.js";import"./isWellBehavedNumber-Di3xCgEJ.js";import"./Label-cQgelXjE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DQpprPKw.js";import"./index-DA1Z20ZR.js";import"./index-B0WUClSq.js";import"./types-C_iF2heC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ReLUkucO.js";import"./immer-Cj0-obxe.js";import"./RechartsWrapper-B9Liyr6r.js";import"./index-DkCredV6.js";import"./index-CZQ5QhT1.js";import"./axisSelectors-DEfJzTHu.js";import"./CartesianChart-m5bXXKFS.js";import"./chartDataContext-Bv2SQjN_.js";import"./CategoricalChart-xCWpyDx3.js";import"./Curve-DsJ0vDb9.js";import"./step-BiB5duu3.js";import"./path-DyVhHtw_.js";import"./ReactUtils-_7naDrvk.js";import"./ActivePoints-QQtgh7iH.js";import"./Dot-C1lQjxdh.js";import"./RegisterGraphicalItemId-BL7Ao-U_.js";import"./ErrorBarContext-C7bZMesM.js";import"./GraphicalItemClipPath-pnbh5A5H.js";import"./SetGraphicalItem-BUgSHz80.js";import"./useAnimationId-3KXs9R46.js";import"./getRadiusAndStrokeWidthFromDot-DElyUSRS.js";import"./ActiveShapeUtils-CXhzrWSQ.js";import"./useElementOffset-BAtvFamF.js";import"./uniqBy-10OvI55m.js";import"./iteratee-CZgOWLEv.js";import"./Cross-DZz_-ucf.js";import"./Rectangle-BW1N7Z3u.js";import"./Sector-Cn6A8M5a.js";const Xt={component:s},S={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),R=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?F(t):b(t)<t?w(t)<t?L(t):R(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Bt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Bt as __namedExportsOrder,Xt as default};
