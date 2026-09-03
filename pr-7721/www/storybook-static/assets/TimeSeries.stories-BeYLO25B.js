import{R as e}from"./iframe-CQz631Nk.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DHy0v3jD.js";import{R as h}from"./zIndexSlice-BiY29BHb.js";import{C as g}from"./ComposedChart-B-N3Zjvf.js";import{L as x}from"./Line-CQpvxMmw.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DbP7sHTP.js";import{T as V}from"./Tooltip-BP0a5D6r.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Dd11BP7Z.js";import"./Layer-DGn6U-cs.js";import"./resolveDefaultProps-BsWR9NdC.js";import"./Text-CpmwLb5H.js";import"./DOMUtils-V3cEDC71.js";import"./isWellBehavedNumber-B7MN_LAX.js";import"./useId-BSAAHf1D.js";import"./useBackwardsCompatibleTheme-DhqH6-Ub.js";import"./Label-DQhaNgKG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-LgQGURcB.js";import"./index-DCbtYhHK.js";import"./index-CDndXHyS.js";import"./types-qf3XACEN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-lkRk7heP.js";import"./throttle-tlVaut9a.js";import"./index-BlfYBgju.js";import"./index-w2pZ54DA.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Btix0jtf.js";import"./axisSelectors-SdSrtuX_.js";import"./index-CUVgoBSt.js";import"./CartesianChart-WE1bkj_w.js";import"./chartDataContext-ef-S8XKm.js";import"./CategoricalChart-6rYejfBQ.js";import"./Curve-B1Y35Tq4.js";import"./step-DM9ed4F2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B3DzMe78.js";import"./useAnimationId-DN0POjqt.js";import"./ActivePoints-BbCYqZ1B.js";import"./Dot-Br265cWC.js";import"./RegisterGraphicalItemId-Bdyk4ltG.js";import"./ErrorBarContext-BVC7bug8.js";import"./GraphicalItemClipPath-Db7czniJ.js";import"./SetGraphicalItem-DLB5o72P.js";import"./getRadiusAndStrokeWidthFromDot-CtkJeIr5.js";import"./ActiveShapeUtils-BfK0DvMY.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-DUjnthxD.js";import"./uniqBy-BOB5B76R.js";import"./iteratee-D419HqXa.js";import"./Cross-D5AY4MRF.js";import"./Rectangle-Cs9OQ1Xh.js";import"./util-Dxo8gN5i.js";import"./Sector-BP4-KhMZ.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Pt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
